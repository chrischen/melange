Set up a few directories we'll need

  $ . ./setup.sh
  $ mkdir -p app
  $ mkdir -p app/.objs/melange
  $ mkdir -p output/app

  $ cat > app/b.ml << EOF
  > let t = ["Hello"] |> List.map(fun greeting -> greeting)
  > EOF

Compile cmjs

  $ melc -ppx melppx -bs-package-output app/ app/b.ml -bs-stop-after-cmj -o app/.objs/melange/b.cmj

Emit js

  $ melc -bs-module-type es6 app/.objs/melange/b.cmj -o output/app/b.js

Check b.js output

  $ cat output/app/b.js
  // Generated by Melange
  
  import * as Stdlib__List from "melange/list.js";
  
  var t = Stdlib__List.map((function (greeting) {
          return greeting;
        }), {
        hd: "Hello",
        tl: /* [] */0
      });
  
  export {
    t ,
  }
  /* t Not a pure module */