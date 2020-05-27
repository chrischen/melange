'use strict';

var Mt = require("./mt.js");
var Pervasives = require("../../lib/js/pervasives.js");

var ff = Pervasives.string_of_float;

function f(v) {
  return String(v);
}

Mt.from_pair_suites("To_string_test", {
      hd: [
        "File \"to_string_test.ml\", line 7, characters 2-9",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: Pervasives.string_of_float(Pervasives.infinity),
                    _1: "inf"
                  };
          })
      ],
      tl: {
        hd: [
          "File \"to_string_test.ml\", line 8, characters 1-8",
          (function (param) {
              return {
                      TAG: /* Eq */0,
                      _0: Pervasives.string_of_float(Pervasives.neg_infinity),
                      _1: "-inf"
                    };
            })
        ],
        tl: /* [] */0
      }
    });

exports.ff = ff;
exports.f = f;
/*  Not a pure module */
