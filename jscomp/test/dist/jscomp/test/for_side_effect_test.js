// Generated by Melange
'use strict';

var Mt = require("./mt.js");

function tst(param) {
  for(var _i = (console.log("hi"), 0) ,_i_finish = (console.log("hello"), 3); _i <= _i_finish; ++_i){
    
  }
}

function test2(param) {
  var v = 0;
  v = 3;
  v = 10;
  for(var _i = 0; _i <= 1; ++_i){
    
  }
  return v;
}

var suites_0 = [
  "for_order",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: 10,
              _1: test2(undefined)
            };
    })
];

var suites = {
  hd: suites_0,
  tl: /* [] */0
};

Mt.from_pair_suites("For_side_effect_test", suites);

exports.tst = tst;
exports.test2 = test2;
exports.suites = suites;
/*  Not a pure module */