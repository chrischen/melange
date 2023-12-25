  $ cat > input.js <<EOF
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/playground/mel_playground.bc.js');
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/playground/melange-cmijs.js');
  > console.log(ocaml.compileML("external f : int = \"\""));
  > EOF

  $ node input.js
  {
    js_code: '// Generated by Melange\n' +
      "/* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */\n",
    warnings: [
      {
        js_warning_error_msg: 'Line 1, 0:\n' +
          '  Alert: fragile f : the external name is inferred from val name is unsafe from refactoring when changing value name',
        row: 0,
        column: 0,
        endRow: 0,
        endColumn: 21,
        text: 'f : the external name is inferred from val name is unsafe from refactoring when changing value name',
        type: 'alert'
      }
    ],
    type_hints: [
      { start: [Object], end: [Object], kind: 'core_type', hint: 'int' }
    ]
  }