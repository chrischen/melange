// Generated by Melange
'use strict';

var Caml_obj = require("melange.js/caml_obj.js");
var Mt = require("./mt.js");
var Stdlib__List = require("melange/list.js");
var Stdlib__Stack = require("melange/stack.js");

function to_list(v) {
  var acc = /* [] */0;
  while(!Caml_obj.caml_equal(v.c, /* [] */0)) {
    acc = {
      hd: Stdlib__Stack.pop(v),
      tl: acc
    };
  };
  return Stdlib__List.rev(acc);
}

function v(param) {
  var v$1 = {
    c: /* [] */0,
    len: 0
  };
  Stdlib__Stack.push(3, v$1);
  Stdlib__Stack.push(4, v$1);
  Stdlib__Stack.push(1, v$1);
  return to_list(v$1);
}

var suites_0 = [
  "push_test",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: {
                hd: 1,
                tl: {
                  hd: 4,
                  tl: {
                    hd: 3,
                    tl: /* [] */0
                  }
                }
              },
              _1: v(undefined)
            };
    })
];

var suites = {
  hd: suites_0,
  tl: /* [] */0
};

Mt.from_pair_suites("Stack_test", suites);

exports.to_list = to_list;
exports.v = v;
exports.suites = suites;
/*  Not a pure module */
