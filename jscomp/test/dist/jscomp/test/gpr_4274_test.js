// Generated by Melange
'use strict';

var Belt__Belt_Array = require("melange.belt/belt_Array.js");
var Belt__Belt_List = require("melange.belt/belt_List.js");

var N = {};

function f(X) {
  return function (xs) {
    X.forEach(xs, {
          i: (function (x) {
              console.log(x.x);
            })
        });
  };
}

Belt__Belt_List.forEachU({
      hd: {
        x: 3
      },
      tl: /* [] */0
    }, (function (x) {
        console.log(x.x);
      }));

var Foo = {};

var bar = [{
    foo: "bar"
  }];

Belt__Belt_Array.mapU(bar, (function (b) {
        return b.foo;
      }));

exports.N = N;
exports.f = f;
exports.Foo = Foo;
exports.bar = bar;
/*  Not a pure module */
