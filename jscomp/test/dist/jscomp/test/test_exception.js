// Generated by Melange
'use strict';

var Caml_exceptions = require("melange.js/caml_exceptions.js");
var Stdlib = require("melange/stdlib.js");
var Test_common = require("./test_common.js");

var Local = /* @__PURE__ */Caml_exceptions.create("Test_exception.Local");

function f(param) {
  throw {
        MEL_EXN_ID: Local,
        _1: 3,
        Error: new Error()
      };
}

function g(param) {
  throw {
        MEL_EXN_ID: Stdlib.Not_found,
        Error: new Error()
      };
}

function h(param) {
  throw {
        MEL_EXN_ID: Test_common.U,
        _1: 3,
        Error: new Error()
      };
}

function x(param) {
  throw {
        MEL_EXN_ID: Test_common.H,
        Error: new Error()
      };
}

function xx(param) {
  throw {
        MEL_EXN_ID: Stdlib.Invalid_argument,
        _1: "x",
        Error: new Error()
      };
}

var Nullary = /* @__PURE__ */Caml_exceptions.create("Test_exception.Nullary");

var a = {
  MEL_EXN_ID: Nullary
};

exports.Local = Local;
exports.f = f;
exports.g = g;
exports.h = h;
exports.x = x;
exports.xx = xx;
exports.Nullary = Nullary;
exports.a = a;
/* No side effect */