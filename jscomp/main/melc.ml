(***********************************************************************)
(*                                                                     *)
(*                                OCaml                                *)
(*                                                                     *)
(*            Xavier Leroy, projet Cristal, INRIA Rocquencourt         *)
(*                                                                     *)
(*  Copyright 1996 Institut National de Recherche en Informatique et   *)
(*  en Automatique.  All rights reserved.  This file is distributed    *)
(*  under the terms of the Q Public License version 1.0.               *)
(*                                                                     *)
(***********************************************************************)

#ifndef BS_RELEASE_BUILD
let print_backtrace () =
  let raw_bt = Printexc.backtrace_slots (Printexc.get_raw_backtrace ()) in
  match raw_bt with
  | None -> ()
  | Some raw_bt ->
      let acc = ref [] in
      for i = Array.length raw_bt - 1 downto 0 do
        let slot = raw_bt.(i) in
        match Printexc.Slot.location slot with
        | None -> ()
        | Some bt -> (
            match !acc with
            | [] -> acc := [ bt ]
            | hd :: _ -> if hd <> bt then acc := bt :: !acc)
      done;
      Ext_list.iter !acc (fun bt ->
          Printf.eprintf "File \"%s\", line %d, characters %d-%d\n" bt.filename
            bt.line_number bt.start_char bt.end_char)
#endif

let set_abs_input_name sourcefile =
  let sourcefile =
    if !Clflags.absname && Filename.is_relative  sourcefile then
      Ext_path.absolute_cwd_path sourcefile
    else sourcefile in
  Location.set_input_name sourcefile;
  sourcefile

let process_file sourcefile
  ?(kind ) ppf =
  (* This is a better default then "", it will be changed later
     The {!Location.input_name} relies on that we write the binary ast
     properly
  *)
  let kind =
    match kind with
    | None -> Ext_file_extensions.classify_input (Ext_filename.get_extension_maybe sourcefile)
    | Some kind -> kind in
  match kind with
  | Ml ->
    let sourcefile = set_abs_input_name  sourcefile in
    Js_implementation.implementation
      ~parser:Pparse_driver.parse_implementation
      ppf sourcefile
  | Mli  ->
    let sourcefile = set_abs_input_name  sourcefile in
    Js_implementation.interface
      ~parser:Pparse_driver.parse_interface
      ppf sourcefile
  | Cmi
    ->
    let cmi_sign = (Cmi_format.read_cmi sourcefile).cmi_sign in
    Printtyp.signature Format.std_formatter cmi_sign ;
    Format.pp_print_newline Format.std_formatter ()
  | Cmj ->
    Js_implementation.implementation_cmj ppf sourcefile
  | Unknown ->
    raise (Arg.Bad ("don't know what to do with " ^ sourcefile))


let ppf = Format.err_formatter

let anonymous ~(rev_args : string list) =
  if !Js_config.as_ppx then
    match rev_args with
    | [output; input] ->
      `Ok (Melange_ppx_lib.Ppx_apply.apply_lazy
        ~source:input
        ~target:output
        Melange_ppx_lib.Ppx_entry.rewrite_implementation
        Melange_ppx_lib.Ppx_entry.rewrite_signature)
    | _ -> `Error(false, "`--as-ppx` requires 2 arguments: `melc --as-ppx input output`")
  else
    begin
        if !Js_config.syntax_only then begin
          Ext_list.rev_iter rev_args (fun filename ->
              begin
                (* Clflags.reset_dump_state (); *)
                (* Warnings.reset (); *)
                process_file filename ppf
              end );
          `Ok ()
          end else

      match rev_args with
      | [filename] -> `Ok (process_file filename ppf)
      | [] -> `Ok ()
      | _ ->
          `Error (false, "can not handle multiple files")
    end

(** used by -impl -intf *)
let impl filename =
  Js_config.js_stdout := false;
  process_file filename ~kind:Ml ppf ;;
let intf filename =
  Js_config.js_stdout := false ;
  process_file filename ~kind:Mli ppf;;

let set_color_option option =
  match Clflags.color_reader.parse option with
  | None -> ()
  | Some setting -> Clflags.color := Some setting

let clean tmpfile =
  if not !Clflags.verbose then try Sys.remove tmpfile with _ -> ()

let eval (s : string) =
  let tmpfile = Filename.temp_file "eval" Literals.suffix_ml in
  Ext_io.write_file tmpfile s;
  let ret = anonymous ~rev_args:[tmpfile] in
  clean tmpfile;
  ret

module Pp = Rescript_cpp
let define_variable s =
  match Ext_string.split ~keep_empty:true s '=' with
  | [key; v] ->
    if not (Pp.define_key_value key v)  then
       raise  (Arg.Bad("illegal definition: " ^ s))
  | _ -> raise (Arg.Bad ("illegal definition: " ^ s))

let print_standard_library () =
  print_endline (String.concat ":" (Js_config.std_include_dirs ()));
  exit 0

let bs_version_string =
  "Melange " ^ Melange_version.version ^
  " ( Using OCaml:" ^ Config.version ^ " )"

let print_version_string () =
#ifndef BS_RELEASE_BUILD
    print_string "DEV VERSION: ";
#endif
    print_endline bs_version_string;
    exit 0

(* NOTE(anmonteiro): This function needs to be reentrant, as it might be called
 * multiple times (`-w` CLI flag, [@@@bs.config { flags = ... }] attribute) .*)
let main: Melc_cli.t -> _ Cmdliner.Term.ret
    = fun {
      Melc_cli.include_dirs;
      alerts;
      warnings;
      output_name;
      ppx;
      open_modules;
      bs_package_output;
      bs_module_type;
      bs_syntax_only;
      bs_g;
      bs_package_name;
      bs_module_name;
      bs_ns;
      as_ppx;
      as_pp;
      no_alias_deps;
      bs_gentype;
      unboxed_types;
      bs_D;
      bs_unsafe_empty_array;
      nostdlib;
      color;
      bs_list_conditionals;
      bs_eval;
      bs_e;
      bs_cmi_only;
      bs_cmi;
      bs_cmj;
      bs_no_version_header;
      bs_no_builtin_ppx;
      bs_cross_module_opt;
      bs_diagnose;
      where;
      verbose;
      keep_locs;
      bs_no_check_div_by_zero;
      bs_noassertfalse;
      noassert;
      bs_loc;
      impl = impl_source_file;
      intf = intf_source_file;
      intf_suffix;
      g;
      opaque;
      strict_sequence;
      strict_formats;
      dtypedtree;
      dparsetree;
      drawlambda;
      dsource;
      version;
      pp;
      absname;
      bin_annot;
      i;
      nopervasives;
      modules;
      nolabels;
      principal;
      short_paths;
      unsafe;
      warn_help;
      warn_error;
      bs_stop_after_cmj;
      runtime = _;
      filenames;
      help
    } ->
  if help then `Help (`Auto, None)
  else begin try
    Clflags.include_dirs :=
      (* The OCaml compiler expects include_dirs in reverse CLI order, but
         cmdliner returns it in CLI order. *)
      List.rev_append include_dirs !Clflags.include_dirs;
    Ext_list.iter alerts Warnings.parse_alert_option;
    Ext_list.iter warnings (fun w ->
        Option.iter
          Location.(prerr_alert none)
          (Warnings.parse_options false w));
    Option.iter
      (fun output_name -> Clflags.output_name := Some output_name)
      output_name ;
    Clflags.all_ppx := !Clflags.all_ppx @ ppx;
    Clflags.open_modules := !Clflags.open_modules @ open_modules;

    Option.iter (fun bs_cross_module_opt ->
        Js_config.cross_module_inline := bs_cross_module_opt)
      bs_cross_module_opt ;
    if bs_syntax_only then Js_config.syntax_only := bs_syntax_only;

    if bs_g then (
      Js_config.debug := bs_g;
      Rescript_cpp.replace_directive_bool "DEBUG" true);

    Option.iter Js_packages_state.set_package_name bs_package_name;
    begin match bs_module_type, bs_package_output with
    | None, [] -> ()
    | Some bs_module_type, [] ->
      let suffix = match output_name with
        | Some output_name ->
          (match Ext_filename.get_all_extensions_maybe output_name with
          | None ->
            raise (Arg.Bad "`-o FILENAME` needs to include a valid extension")
          | Some ext ->
            (match Ext_js_suffix.of_string ext with
            | Unknown_extension ->
                raise (Arg.Bad "`-o FILENAME` needs to include a valid extension")
            | other -> other))
        | None ->
          raise (Arg.Bad "`-o FILENAME` is required when passing `-bs-module-type`")
      in
      Js_packages_state.set_output_info ~suffix bs_module_type
    | None, bs_package_output ->
      Ext_list.iter bs_package_output
        (Js_packages_state.update_npm_package_path ?module_name:bs_module_name);
    | Some _, _ :: _ ->
      raise (Arg.Bad ("Can't pass both `-bs-package-output` and `-bs-module-type`"))
    end;

    Option.iter Js_packages_state.set_package_map bs_ns ;

    if as_ppx then Js_config.as_ppx := as_ppx;
    if as_pp then (
      Js_config.as_pp := true;
      Js_config.syntax_only := true);

    if no_alias_deps then Clflags.transparent_modules := no_alias_deps;
    Option.iter
      (fun bs_gentype -> Bs_clflags.bs_gentype := Some bs_gentype)
      bs_gentype;
    if unboxed_types then Clflags.unboxed_types := unboxed_types;
    Ext_list.iter bs_D define_variable;
    if bs_list_conditionals then Pp.list_variables Format.err_formatter;
    if bs_unsafe_empty_array then Config.unsafe_empty_array := bs_unsafe_empty_array;
    if nostdlib then Js_config.no_stdlib := nostdlib;
    Option.iter set_color_option color;

    if bs_cmi_only then Js_config.cmi_only := bs_cmi_only;
    if bs_cmi then Js_config.force_cmi := bs_cmi;
    if bs_cmj then Js_config.force_cmj := bs_cmj;
    if bs_no_version_header then
      Js_config.no_version_header := bs_no_version_header;
    if bs_no_builtin_ppx then Js_config.no_builtin_ppx := bs_no_builtin_ppx;
    if bs_diagnose then Js_config.diagnose := bs_diagnose;
    if where then print_standard_library ();
    if verbose then Clflags.verbose := verbose;
    Option.iter (fun keep_locs -> Clflags.keep_locs := keep_locs) keep_locs;
    if bs_no_check_div_by_zero then Js_config.check_div_by_zero := false;
    if bs_noassertfalse then Bs_clflags.no_assert_false := bs_noassertfalse;
    if noassert then Clflags.noassert := noassert;
    if bs_loc then Clflags.locations := bs_loc;
    if dtypedtree then Clflags.dump_typedtree := dtypedtree;
    if dparsetree then Clflags.dump_parsetree := dparsetree;
    if drawlambda then Clflags.dump_rawlambda := drawlambda;
    if dsource then Clflags.dump_source := dsource;
    if version then print_version_string ();
    Option.iter (fun pp -> Clflags.preprocessor := Some pp) pp;
    if absname then Clflags.absname := absname;
    Option.iter (fun bin_annot ->  Clflags.binary_annotations := bin_annot) bin_annot;
    if i then Clflags.print_types := i;
    if nopervasives then Clflags.nopervasives := nopervasives;
    if modules then Js_config.modules := modules;
    if nolabels then Clflags.classic := nolabels;
    if principal then Clflags.principal := principal;
    if short_paths then Clflags.real_paths := false;
    if unsafe then Clflags.unsafe := unsafe;
    if warn_help then Warnings.help_warnings ();
    Ext_list.iter warn_error (fun w ->
        Option.iter Location.(prerr_alert none) (Warnings.parse_options true w));
    if bs_stop_after_cmj then Js_config.cmj_only := bs_stop_after_cmj;

    Option.iter (fun s ->
        ignore (eval s: _ Cmdliner.Term.ret ))
      bs_eval;
    Option.iter (fun s ->
        ignore (eval s: _ Cmdliner.Term.ret ))
      bs_e;
    Option.iter (fun suffix -> Config.interface_suffix := suffix) intf_suffix;
    if g then Clflags.debug := g;
    if opaque then Clflags.opaque := opaque;
    if strict_sequence then Clflags.strict_sequence := strict_sequence;
    if strict_formats then Clflags.strict_formats := strict_formats;

    Option.iter impl impl_source_file ;
    Option.iter intf intf_source_file ;
    anonymous ~rev_args:(List.rev filenames)
    with
    | Arg.Bad msg ->
      `Error (false, msg)
    | x ->
      begin
#ifndef BS_RELEASE_BUILD
        print_backtrace ();
#endif
        Location.report_exception ppf x;
        exit 2
      end
  end


let melc_cmd =
  let open Cmdliner in
  let doc = "the Melange compiler" in
  let info = Cmd.info "melc" ~doc in
  Cmd.v info Term.(ret (const main $ Melc_cli.cmd))

(** parse flags in bs.config *)
let file_level_flags_handler (e : Parsetree.expression option) =
  match e with
  | None -> ()
  | Some { pexp_desc = Pexp_array args; pexp_loc; _ } ->
    let args =
        ( Ext_list.map  args (fun e ->
              match e.pexp_desc with
              | Pexp_constant (Pconst_string(name,_,_)) -> name
              | _ -> Location.raise_errorf ~loc:e.pexp_loc "string literal expected" )) in
    let argv = Melc_cli.normalize_argv (Array.of_list (Sys.argv.(0) :: args)) in
    (match Cmdliner.Cmd.eval ~argv melc_cmd with
    | c when c = Cmdliner.Cmd.Exit.ok -> ()
    | _c -> Location.raise_errorf ~loc:pexp_loc "Invalid configuration")
  | Some e ->
    Location.raise_errorf ~loc:e.pexp_loc "string array expected"

let () =
  Bs_conditional_initial.setup_env ();
  let flags = "flags" in
  Ast_config.add_structure
    flags file_level_flags_handler;
  Ast_config.add_signature
    flags file_level_flags_handler;

  let argv = Melc_cli.normalize_argv Sys.argv in
  exit (Cmdliner.Cmd.eval ~argv melc_cmd)
