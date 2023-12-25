// Generated by Melange
'use strict';

var Belt__Belt_Array = require("melange.belt/belt_Array.js");
var Belt__Belt_List = require("melange.belt/belt_List.js");
var Caml = require("melange.js/caml.js");
var Caml_obj = require("melange.js/caml_obj.js");
var Curry = require("melange.js/curry.js");
var Mt = require("./mt.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

function $$throw(loc, x) {
  Mt.throw_suites(test_id, suites, loc, x);
}

function neq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Neq */1,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
}

function push(prim0, prim1) {
  prim0.push(prim1);
}

console.log([
            1,
            2,
            3,
            4
          ].filter(function (x) {
              return x > 2;
            }).map(function (x, i) {
            return x + i | 0;
          }).reduce((function (x, y) {
            return x + y | 0;
          }), 0));

var v = [
  1,
  2
];

eq("File \"jscomp/test/bs_array_test.ml\", line 29, characters 5-12", [
      Belt__Belt_Array.get(v, 0),
      Belt__Belt_Array.get(v, 1),
      Belt__Belt_Array.get(v, 2),
      Belt__Belt_Array.get(v, 3),
      Belt__Belt_Array.get(v, -1)
    ], [
      1,
      2,
      undefined,
      undefined,
      undefined
    ]);

$$throw("File \"jscomp/test/bs_array_test.ml\", line 32, characters 8-15", (function (param) {
        Belt__Belt_Array.getExn([
              0,
              1
            ], -1);
      }));

$$throw("File \"jscomp/test/bs_array_test.ml\", line 33, characters 8-15", (function (param) {
        Belt__Belt_Array.getExn([
              0,
              1
            ], 2);
      }));

var partial_arg = [
  0,
  1
];

function f(param) {
  return Belt__Belt_Array.getExn(partial_arg, param);
}

b("File \"jscomp/test/bs_array_test.ml\", line 34, characters 4-11", Caml_obj.caml_equal([
          Curry._1(f, 0),
          Curry._1(f, 1)
        ], [
          0,
          1
        ]));

$$throw("File \"jscomp/test/bs_array_test.ml\", line 35, characters 8-15", (function (param) {
        Belt__Belt_Array.setExn([
              0,
              1
            ], -1, 0);
      }));

$$throw("File \"jscomp/test/bs_array_test.ml\", line 36, characters 8-15", (function (param) {
        Belt__Belt_Array.setExn([
              0,
              1
            ], 2, 0);
      }));

b("File \"jscomp/test/bs_array_test.ml\", line 37, characters 4-11", !Belt__Belt_Array.set([
          1,
          2
        ], 2, 0));

var v$1 = [
  1,
  2
];

if (!Belt__Belt_Array.set(v$1, 0, 0)) {
  throw {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/bs_array_test.ml",
          38,
          33
        ],
        Error: new Error()
      };
}

b("File \"jscomp/test/bs_array_test.ml\", line 38, characters 4-11", Belt__Belt_Array.getExn(v$1, 0) === 0);

var v$2 = [
  1,
  2
];

if (!Belt__Belt_Array.set(v$2, 1, 0)) {
  throw {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/bs_array_test.ml",
          39,
          32
        ],
        Error: new Error()
      };
}

b("File \"jscomp/test/bs_array_test.ml\", line 39, characters 4-11", Belt__Belt_Array.getExn(v$2, 1) === 0);

var v$3 = [
  1,
  2
];

b("File \"jscomp/test/bs_array_test.ml\", line 40, characters 4-11", (Belt__Belt_Array.setExn(v$3, 0, 0), Belt__Belt_Array.getExn(v$3, 0) === 0));

var v$4 = [
  1,
  2
];

b("File \"jscomp/test/bs_array_test.ml\", line 41, characters 4-11", (Belt__Belt_Array.setExn(v$4, 1, 0), Belt__Belt_Array.getExn(v$4, 1) === 0));

function add(x, y) {
  return x + y | 0;
}

var v$5 = Belt__Belt_Array.makeBy(3000, (function (i) {
        return i;
      }));

var u = Belt__Belt_Array.shuffle(v$5);

neq("File \"jscomp/test/bs_array_test.ml\", line 48, characters 6-13", u, v$5);

eq("File \"jscomp/test/bs_array_test.ml\", line 50, characters 5-12", Belt__Belt_Array.reduce(u, 0, add), Belt__Belt_Array.reduce(v$5, 0, add));

b("File \"jscomp/test/bs_array_test.ml\", line 55, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.range(0, 3), [
          0,
          1,
          2,
          3
        ]));

b("File \"jscomp/test/bs_array_test.ml\", line 56, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.range(3, 0), []));

b("File \"jscomp/test/bs_array_test.ml\", line 57, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.range(3, 3), [3]));

b("File \"jscomp/test/bs_array_test.ml\", line 59, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.rangeBy(0, 10, 3), [
          0,
          3,
          6,
          9
        ]));

b("File \"jscomp/test/bs_array_test.ml\", line 60, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.rangeBy(0, 12, 3), [
          0,
          3,
          6,
          9,
          12
        ]));

b("File \"jscomp/test/bs_array_test.ml\", line 61, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.rangeBy(33, 0, 1), []));

b("File \"jscomp/test/bs_array_test.ml\", line 62, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.rangeBy(33, 0, -1), []));

b("File \"jscomp/test/bs_array_test.ml\", line 63, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.rangeBy(3, 12, -1), []));

b("File \"jscomp/test/bs_array_test.ml\", line 64, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.rangeBy(3, 3, 0), []));

b("File \"jscomp/test/bs_array_test.ml\", line 65, characters 4-11", Caml_obj.caml_equal(Belt__Belt_Array.rangeBy(3, 3, 1), [3]));

eq("File \"jscomp/test/bs_array_test.ml\", line 70, characters 5-12", Belt__Belt_Array.reduceReverse([], 100, (function (prim0, prim1) {
            return prim0 - prim1 | 0;
          })), 100);

eq("File \"jscomp/test/bs_array_test.ml\", line 71, characters 5-12", Belt__Belt_Array.reduceReverse([
          1,
          2
        ], 100, (function (prim0, prim1) {
            return prim0 - prim1 | 0;
          })), 97);

eq("File \"jscomp/test/bs_array_test.ml\", line 72, characters 5-12", Belt__Belt_Array.reduceReverse([
          1,
          2,
          3,
          4
        ], 100, (function (prim0, prim1) {
            return prim0 - prim1 | 0;
          })), 90);

eq("File \"jscomp/test/bs_array_test.ml\", line 73, characters 5-12", Belt__Belt_Array.reduceWithIndex([
          1,
          2,
          3,
          4
        ], 0, (function (acc, x, i) {
            return (acc + x | 0) + i | 0;
          })), 16);

b("File \"jscomp/test/bs_array_test.ml\", line 74, characters 4-11", Belt__Belt_Array.reduceReverse2([
          1,
          2,
          3
        ], [
          1,
          2
        ], 0, (function (acc, x, y) {
            return (acc + x | 0) + y | 0;
          })) === 6);

function addone(x) {
  return x + 1 | 0;
}

function makeMatrixExn(sx, sy, init) {
  if (!(sx >= 0 && sy >= 0)) {
    throw {
          MEL_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/test/bs_array_test.ml",
            80,
            2
          ],
          Error: new Error()
        };
  }
  var res = new Array(sx);
  for(var x = 0; x < sx; ++x){
    var initY = new Array(sy);
    for(var y = 0; y < sy; ++y){
      initY[y] = init;
    }
    res[x] = initY;
  }
  return res;
}

eq("File \"jscomp/test/bs_array_test.ml\", line 92, characters 5-12", Belt__Belt_Array.makeBy(0, (function (param) {
            return 1;
          })), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 93, characters 5-12", Belt__Belt_Array.makeBy(3, (function (i) {
            return i;
          })), [
      0,
      1,
      2
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 94, characters 5-12", makeMatrixExn(3, 4, 1), [
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1
      ]
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 97, characters 5-12", makeMatrixExn(3, 0, 0), [
      [],
      [],
      []
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 98, characters 5-12", makeMatrixExn(0, 3, 1), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 99, characters 5-12", makeMatrixExn(1, 1, 1), [[1]]);

eq("File \"jscomp/test/bs_array_test.ml\", line 100, characters 5-12", [].slice(0), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 101, characters 5-12", Belt__Belt_Array.map([], (function (prim) {
            return prim + 1 | 0;
          })), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 102, characters 5-12", Belt__Belt_Array.mapWithIndex([], add), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 103, characters 5-12", Belt__Belt_Array.mapWithIndex([
          1,
          2,
          3
        ], add), [
      1,
      3,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 104, characters 5-12", Belt__Belt_List.fromArray([]), /* [] */0);

eq("File \"jscomp/test/bs_array_test.ml\", line 105, characters 5-12", Belt__Belt_List.fromArray([1]), {
      hd: 1,
      tl: /* [] */0
    });

eq("File \"jscomp/test/bs_array_test.ml\", line 106, characters 5-12", Belt__Belt_List.fromArray([
          1,
          2,
          3
        ]), {
      hd: 1,
      tl: {
        hd: 2,
        tl: {
          hd: 3,
          tl: /* [] */0
        }
      }
    });

eq("File \"jscomp/test/bs_array_test.ml\", line 107, characters 5-12", Belt__Belt_Array.map([
          1,
          2,
          3
        ], (function (prim) {
            return prim + 1 | 0;
          })), [
      2,
      3,
      4
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 108, characters 5-12", Belt__Belt_List.toArray(/* [] */0), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 109, characters 5-12", Belt__Belt_List.toArray({
          hd: 1,
          tl: /* [] */0
        }), [1]);

eq("File \"jscomp/test/bs_array_test.ml\", line 110, characters 5-12", Belt__Belt_List.toArray({
          hd: 1,
          tl: {
            hd: 2,
            tl: /* [] */0
          }
        }), [
      1,
      2
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 111, characters 5-12", Belt__Belt_List.toArray({
          hd: 1,
          tl: {
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }
        }), [
      1,
      2,
      3
    ]);

var v$6 = Belt__Belt_Array.makeBy(10, (function (i) {
        return i;
      }));

var v0 = Belt__Belt_Array.keep(v$6, (function (x) {
        return x % 2 === 0;
      }));

var v1 = Belt__Belt_Array.keep(v$6, (function (x) {
        return x % 3 === 0;
      }));

var v2 = Belt__Belt_Array.keepMap(v$6, (function (x) {
        if (x % 2 === 0) {
          return x + 1 | 0;
        }
        
      }));

eq("File \"jscomp/test/bs_array_test.ml\", line 118, characters 5-12", v0, [
      0,
      2,
      4,
      6,
      8
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 119, characters 5-12", v1, [
      0,
      3,
      6,
      9
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 120, characters 5-12", v2, [
      1,
      3,
      5,
      7,
      9
    ]);

var a = [
  1,
  2,
  3,
  4,
  5
];

var match = Belt__Belt_Array.partition(a, (function (x) {
        return x % 2 === 0;
      }));

eq("File \"jscomp/test/bs_array_test.ml\", line 125, characters 5-12", match[0], [
      2,
      4
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 126, characters 5-12", match[1], [
      1,
      3,
      5
    ]);

var match$1 = Belt__Belt_Array.partition(a, (function (x) {
        return x === 2;
      }));

eq("File \"jscomp/test/bs_array_test.ml\", line 128, characters 5-12", match$1[0], [2]);

eq("File \"jscomp/test/bs_array_test.ml\", line 129, characters 5-12", match$1[1], [
      1,
      3,
      4,
      5
    ]);

var match$2 = Belt__Belt_Array.partition([], (function (x) {
        return false;
      }));

eq("File \"jscomp/test/bs_array_test.ml\", line 131, characters 5-12", match$2[0], []);

eq("File \"jscomp/test/bs_array_test.ml\", line 132, characters 5-12", match$2[1], []);

var a$1 = [
  1,
  2,
  3,
  4,
  5
];

eq("File \"jscomp/test/bs_array_test.ml\", line 136, characters 5-12", Belt__Belt_Array.slice(a$1, 0, 2), [
      1,
      2
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 137, characters 5-12", Belt__Belt_Array.slice(a$1, 0, 5), [
      1,
      2,
      3,
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 138, characters 5-12", Belt__Belt_Array.slice(a$1, 0, 15), [
      1,
      2,
      3,
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 139, characters 5-12", Belt__Belt_Array.slice(a$1, 5, 1), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 140, characters 5-12", Belt__Belt_Array.slice(a$1, 4, 1), [5]);

eq("File \"jscomp/test/bs_array_test.ml\", line 141, characters 5-12", Belt__Belt_Array.slice(a$1, -1, 1), [5]);

eq("File \"jscomp/test/bs_array_test.ml\", line 142, characters 5-12", Belt__Belt_Array.slice(a$1, -1, 2), [5]);

eq("File \"jscomp/test/bs_array_test.ml\", line 143, characters 5-12", Belt__Belt_Array.slice(a$1, -2, 1), [4]);

eq("File \"jscomp/test/bs_array_test.ml\", line 144, characters 5-12", Belt__Belt_Array.slice(a$1, -2, 2), [
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 145, characters 5-12", Belt__Belt_Array.slice(a$1, -2, 3), [
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 146, characters 5-12", Belt__Belt_Array.slice(a$1, -10, 3), [
      1,
      2,
      3
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 147, characters 5-12", Belt__Belt_Array.slice(a$1, -10, 4), [
      1,
      2,
      3,
      4
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 148, characters 5-12", Belt__Belt_Array.slice(a$1, -10, 5), [
      1,
      2,
      3,
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 149, characters 5-12", Belt__Belt_Array.slice(a$1, -10, 6), [
      1,
      2,
      3,
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 150, characters 5-12", Belt__Belt_Array.slice(a$1, 0, 0), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 151, characters 5-12", Belt__Belt_Array.slice(a$1, 0, -1), []);

var a$2 = [
  1,
  2,
  3,
  4,
  5
];

eq("File \"jscomp/test/bs_array_test.ml\", line 155, characters 5-12", Belt__Belt_Array.sliceToEnd(a$2, 0), [
      1,
      2,
      3,
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 156, characters 5-12", Belt__Belt_Array.sliceToEnd(a$2, 5), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 157, characters 5-12", Belt__Belt_Array.sliceToEnd(a$2, 4), [5]);

eq("File \"jscomp/test/bs_array_test.ml\", line 158, characters 5-12", Belt__Belt_Array.sliceToEnd(a$2, -1), [5]);

eq("File \"jscomp/test/bs_array_test.ml\", line 159, characters 5-12", Belt__Belt_Array.sliceToEnd(a$2, -2), [
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 160, characters 5-12", Belt__Belt_Array.sliceToEnd(a$2, -10), [
      1,
      2,
      3,
      4,
      5
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 161, characters 5-12", Belt__Belt_Array.sliceToEnd(a$2, 6), []);

var a$3 = Belt__Belt_Array.makeBy(10, (function (x) {
        return x;
      }));

Belt__Belt_Array.fill(a$3, 0, 3, 0);

eq("File \"jscomp/test/bs_array_test.ml\", line 165, characters 6-13", a$3.slice(0), [
      0,
      0,
      0,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);

Belt__Belt_Array.fill(a$3, 2, 8, 1);

eq("File \"jscomp/test/bs_array_test.ml\", line 167, characters 5-12", a$3.slice(0), [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]);

Belt__Belt_Array.fill(a$3, 8, 1, 9);

eq("File \"jscomp/test/bs_array_test.ml\", line 169, characters 5-12", a$3.slice(0), [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      9,
      1
    ]);

Belt__Belt_Array.fill(a$3, 8, 2, 9);

eq("File \"jscomp/test/bs_array_test.ml\", line 171, characters 5-12", a$3.slice(0), [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      9,
      9
    ]);

Belt__Belt_Array.fill(a$3, 8, 3, 12);

eq("File \"jscomp/test/bs_array_test.ml\", line 173, characters 5-12", a$3.slice(0), [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      12,
      12
    ]);

Belt__Belt_Array.fill(a$3, -2, 3, 11);

eq("File \"jscomp/test/bs_array_test.ml\", line 175, characters 5-12", a$3.slice(0), [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      11,
      11
    ]);

Belt__Belt_Array.fill(a$3, -3, 3, 10);

eq("File \"jscomp/test/bs_array_test.ml\", line 177, characters 5-12", a$3.slice(0), [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      10,
      10,
      10
    ]);

Belt__Belt_Array.fill(a$3, -3, 1, 7);

eq("File \"jscomp/test/bs_array_test.ml\", line 179, characters 5-12", a$3.slice(0), [
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      7,
      10,
      10
    ]);

Belt__Belt_Array.fill(a$3, -13, 1, 7);

eq("File \"jscomp/test/bs_array_test.ml\", line 181, characters 5-12", a$3.slice(0), [
      7,
      0,
      1,
      1,
      1,
      1,
      1,
      7,
      10,
      10
    ]);

Belt__Belt_Array.fill(a$3, -13, 12, 7);

eq("File \"jscomp/test/bs_array_test.ml\", line 183, characters 5-12", a$3.slice(0), Belt__Belt_Array.make(10, 7));

Belt__Belt_Array.fill(a$3, 0, -1, 2);

eq("File \"jscomp/test/bs_array_test.ml\", line 185, characters 5-12", a$3.slice(0), Belt__Belt_Array.make(10, 7));

var b$1 = [
  1,
  2,
  3
];

Belt__Belt_Array.fill(b$1, 0, 0, 0);

eq("File \"jscomp/test/bs_array_test.ml\", line 188, characters 5-12", b$1, [
      1,
      2,
      3
    ]);

Belt__Belt_Array.fill(b$1, 4, 1, 0);

eq("File \"jscomp/test/bs_array_test.ml\", line 190, characters 5-12", b$1, [
      1,
      2,
      3
    ]);

var a0 = Belt__Belt_Array.makeBy(10, (function (x) {
        return x;
      }));

var b0 = Belt__Belt_Array.make(10, 3);

Belt__Belt_Array.blit(a0, 1, b0, 2, 5);

eq("File \"jscomp/test/bs_array_test.ml\", line 196, characters 5-12", b0.slice(0), [
      3,
      3,
      1,
      2,
      3,
      4,
      5,
      3,
      3,
      3
    ]);

Belt__Belt_Array.blit(a0, -1, b0, 2, 5);

eq("File \"jscomp/test/bs_array_test.ml\", line 199, characters 5-12", b0.slice(0), [
      3,
      3,
      9,
      2,
      3,
      4,
      5,
      3,
      3,
      3
    ]);

Belt__Belt_Array.blit(a0, -1, b0, -2, 5);

eq("File \"jscomp/test/bs_array_test.ml\", line 202, characters 5-12", b0.slice(0), [
      3,
      3,
      9,
      2,
      3,
      4,
      5,
      3,
      9,
      3
    ]);

Belt__Belt_Array.blit(a0, -2, b0, -2, 2);

eq("File \"jscomp/test/bs_array_test.ml\", line 205, characters 5-12", b0.slice(0), [
      3,
      3,
      9,
      2,
      3,
      4,
      5,
      3,
      8,
      9
    ]);

Belt__Belt_Array.blit(a0, -11, b0, -11, 100);

eq("File \"jscomp/test/bs_array_test.ml\", line 208, characters 5-12", b0.slice(0), a0);

Belt__Belt_Array.blit(a0, -11, b0, -11, 2);

eq("File \"jscomp/test/bs_array_test.ml\", line 210, characters 5-12", b0.slice(0), a0);

var aa = Belt__Belt_Array.makeBy(10, (function (x) {
        return x;
      }));

Belt__Belt_Array.blit(aa, -1, aa, 1, 2);

eq("File \"jscomp/test/bs_array_test.ml\", line 213, characters 5-12", aa.slice(0), [
      0,
      9,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);

Belt__Belt_Array.blit(aa, -2, aa, 1, 2);

eq("File \"jscomp/test/bs_array_test.ml\", line 215, characters 5-12", aa.slice(0), [
      0,
      8,
      9,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);

Belt__Belt_Array.blit(aa, -5, aa, 4, 3);

eq("File \"jscomp/test/bs_array_test.ml\", line 217, characters 5-12", aa.slice(0), [
      0,
      8,
      9,
      3,
      5,
      6,
      7,
      7,
      8,
      9
    ]);

Belt__Belt_Array.blit(aa, 4, aa, 5, 3);

eq("File \"jscomp/test/bs_array_test.ml\", line 219, characters 5-12", aa.slice(0), [
      0,
      8,
      9,
      3,
      5,
      5,
      6,
      7,
      8,
      9
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 220, characters 5-12", Belt__Belt_Array.make(0, 3), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 221, characters 5-12", Belt__Belt_Array.make(-1, 3), []);

var c = [
  0,
  1,
  2
];

Belt__Belt_Array.blit(c, 4, c, 1, 1);

eq("File \"jscomp/test/bs_array_test.ml\", line 224, characters 5-12", c, [
      0,
      1,
      2
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 227, characters 5-12", Belt__Belt_Array.zip([
          1,
          2,
          3
        ], [
          2,
          3,
          4,
          1
        ]), [
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ]
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 228, characters 5-12", Belt__Belt_Array.zip([
          2,
          3,
          4,
          1
        ], [
          1,
          2,
          3
        ]), [
      [
        2,
        1
      ],
      [
        3,
        2
      ],
      [
        4,
        3
      ]
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 229, characters 5-12", Belt__Belt_Array.zipBy([
          2,
          3,
          4,
          1
        ], [
          1,
          2,
          3
        ], (function (prim0, prim1) {
            return prim0 - prim1 | 0;
          })), [
      1,
      1,
      1
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 230, characters 5-12", Belt__Belt_Array.zipBy([
          1,
          2,
          3
        ], [
          2,
          3,
          4,
          1
        ], (function (prim0, prim1) {
            return prim0 - prim1 | 0;
          })), Belt__Belt_Array.map([
          1,
          1,
          1
        ], (function (x) {
            return -x | 0;
          })));

eq("File \"jscomp/test/bs_array_test.ml\", line 231, characters 5-12", Belt__Belt_Array.unzip([
          [
            1,
            2
          ],
          [
            2,
            3
          ],
          [
            3,
            4
          ]
        ]), [
      [
        1,
        2,
        3
      ],
      [
        2,
        3,
        4
      ]
    ]);

function sumUsingForEach(xs) {
  var v = {
    contents: 0
  };
  Belt__Belt_Array.forEach(xs, (function (x) {
          v.contents = v.contents + x | 0;
        }));
  return v.contents;
}

eq("File \"jscomp/test/bs_array_test.ml\", line 241, characters 5-12", sumUsingForEach([
          0,
          1,
          2,
          3,
          4
        ]), 10);

b("File \"jscomp/test/bs_array_test.ml\", line 242, characters 4-11", !Belt__Belt_Array.every([
          0,
          1,
          2,
          3,
          4
        ], (function (x) {
            return x > 2;
          })));

b("File \"jscomp/test/bs_array_test.ml\", line 243, characters 4-11", Belt__Belt_Array.some([
          1,
          3,
          7,
          8
        ], (function (x) {
            return x % 2 === 0;
          })));

b("File \"jscomp/test/bs_array_test.ml\", line 244, characters 4-11", !Belt__Belt_Array.some([
          1,
          3,
          7
        ], (function (x) {
            return x % 2 === 0;
          })));

b("File \"jscomp/test/bs_array_test.ml\", line 245, characters 4-11", !Belt__Belt_Array.eq([
          0,
          1
        ], [1], (function (prim0, prim1) {
            return prim0 === prim1;
          })));

var c$1 = {
  contents: 0
};

b("File \"jscomp/test/bs_array_test.ml\", line 246, characters 4-11", (Belt__Belt_Array.forEachWithIndex([
            1,
            1,
            1
          ], (function (i, v) {
              c$1.contents = (c$1.contents + i | 0) + v | 0;
            })), c$1.contents === 6));

function id(loc, x) {
  var u = x.slice(0);
  eq("File \"jscomp/test/bs_array_test.ml\", line 256, characters 5-12", Belt__Belt_Array.reverse(x), (Belt__Belt_Array.reverseInPlace(u), u));
}

id("File \"jscomp/test/bs_array_test.ml\", line 261, characters 5-12", []);

id("File \"jscomp/test/bs_array_test.ml\", line 262, characters 5-12", [1]);

id("File \"jscomp/test/bs_array_test.ml\", line 263, characters 5-12", [
      1,
      2
    ]);

id("File \"jscomp/test/bs_array_test.ml\", line 264, characters 5-12", [
      1,
      2,
      3
    ]);

id("File \"jscomp/test/bs_array_test.ml\", line 265, characters 5-12", [
      1,
      2,
      3,
      4
    ]);

function every2(xs, ys) {
  var partial_arg = Belt__Belt_List.toArray(ys);
  var partial_arg$1 = Belt__Belt_List.toArray(xs);
  return function (param) {
    return Belt__Belt_Array.every2(partial_arg$1, partial_arg, param);
  };
}

function some2(xs, ys) {
  var partial_arg = Belt__Belt_List.toArray(ys);
  var partial_arg$1 = Belt__Belt_List.toArray(xs);
  return function (param) {
    return Belt__Belt_Array.some2(partial_arg$1, partial_arg, param);
  };
}

eq("File \"jscomp/test/bs_array_test.ml\", line 275, characters 5-12", every2(/* [] */0, {
            hd: 1,
            tl: /* [] */0
          })(function (x, y) {
          return x > y;
        }), true);

eq("File \"jscomp/test/bs_array_test.ml\", line 276, characters 5-12", every2({
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }, {
            hd: 1,
            tl: /* [] */0
          })(function (x, y) {
          return x > y;
        }), true);

eq("File \"jscomp/test/bs_array_test.ml\", line 277, characters 5-12", every2({
            hd: 2,
            tl: /* [] */0
          }, {
            hd: 1,
            tl: /* [] */0
          })(function (x, y) {
          return x > y;
        }), true);

eq("File \"jscomp/test/bs_array_test.ml\", line 278, characters 5-12", every2({
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }, {
            hd: 1,
            tl: {
              hd: 4,
              tl: /* [] */0
            }
          })(function (x, y) {
          return x > y;
        }), false);

eq("File \"jscomp/test/bs_array_test.ml\", line 279, characters 5-12", every2({
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }, {
            hd: 1,
            tl: {
              hd: 0,
              tl: /* [] */0
            }
          })(function (x, y) {
          return x > y;
        }), true);

eq("File \"jscomp/test/bs_array_test.ml\", line 280, characters 5-12", some2(/* [] */0, {
            hd: 1,
            tl: /* [] */0
          })(function (x, y) {
          return x > y;
        }), false);

eq("File \"jscomp/test/bs_array_test.ml\", line 281, characters 5-12", some2({
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }, {
            hd: 1,
            tl: /* [] */0
          })(function (x, y) {
          return x > y;
        }), true);

eq("File \"jscomp/test/bs_array_test.ml\", line 282, characters 5-12", some2({
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }, {
            hd: 1,
            tl: {
              hd: 4,
              tl: /* [] */0
            }
          })(function (x, y) {
          return x > y;
        }), true);

eq("File \"jscomp/test/bs_array_test.ml\", line 283, characters 5-12", some2({
            hd: 0,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }, {
            hd: 1,
            tl: {
              hd: 4,
              tl: /* [] */0
            }
          })(function (x, y) {
          return x > y;
        }), false);

eq("File \"jscomp/test/bs_array_test.ml\", line 284, characters 5-12", some2({
            hd: 0,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }, {
            hd: 3,
            tl: {
              hd: 2,
              tl: /* [] */0
            }
          })(function (x, y) {
          return x > y;
        }), true);

eq("File \"jscomp/test/bs_array_test.ml\", line 289, characters 5-12", Belt__Belt_Array.concat([], [
          1,
          2,
          3
        ]), [
      1,
      2,
      3
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 290, characters 5-12", Belt__Belt_Array.concat([], []), []);

eq("File \"jscomp/test/bs_array_test.ml\", line 291, characters 5-12", Belt__Belt_Array.concat([
          3,
          2
        ], [
          1,
          2,
          3
        ]), [
      3,
      2,
      1,
      2,
      3
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 292, characters 5-12", Belt__Belt_Array.concatMany([
          [
            3,
            2
          ],
          [
            1,
            2,
            3
          ]
        ]), [
      3,
      2,
      1,
      2,
      3
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 293, characters 5-12", Belt__Belt_Array.concatMany([
          [
            3,
            2
          ],
          [
            1,
            2,
            3
          ],
          [],
          [0]
        ]), [
      3,
      2,
      1,
      2,
      3,
      0
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 294, characters 5-12", Belt__Belt_Array.concatMany([
          [],
          [
            3,
            2
          ],
          [
            1,
            2,
            3
          ],
          [],
          [0]
        ]), [
      3,
      2,
      1,
      2,
      3,
      0
    ]);

eq("File \"jscomp/test/bs_array_test.ml\", line 295, characters 5-12", Belt__Belt_Array.concatMany([
          [],
          []
        ]), []);

b("File \"jscomp/test/bs_array_test.ml\", line 298, characters 4-11", Belt__Belt_Array.cmp([
          1,
          2,
          3
        ], [
          0,
          1,
          2,
          3
        ], Caml.caml_int_compare) < 0);

b("File \"jscomp/test/bs_array_test.ml\", line 299, characters 4-11", Belt__Belt_Array.cmp([
          0,
          1,
          2,
          3
        ], [
          1,
          2,
          3
        ], Caml.caml_int_compare) > 0);

b("File \"jscomp/test/bs_array_test.ml\", line 300, characters 4-11", Belt__Belt_Array.cmp([
          1,
          2,
          3
        ], [
          0,
          1,
          2
        ], Caml.caml_int_compare) > 0);

b("File \"jscomp/test/bs_array_test.ml\", line 301, characters 4-11", Belt__Belt_Array.cmp([
          1,
          2,
          3
        ], [
          1,
          2,
          3
        ], Caml.caml_int_compare) === 0);

b("File \"jscomp/test/bs_array_test.ml\", line 302, characters 4-11", Belt__Belt_Array.cmp([
          1,
          2,
          4
        ], [
          1,
          2,
          3
        ], Caml.caml_int_compare) > 0);

eq("File \"jscomp/test/bs_array_test.ml\", line 305, characters 5-12", Belt__Belt_Array.getBy([
          1,
          2,
          3
        ], (function (x) {
            return x > 1;
          })), 2);

eq("File \"jscomp/test/bs_array_test.ml\", line 306, characters 5-12", Belt__Belt_Array.getBy([
          1,
          2,
          3
        ], (function (x) {
            return x > 3;
          })), undefined);

eq("File \"jscomp/test/bs_array_test.ml\", line 309, characters 5-12", Belt__Belt_Array.getIndexBy([
          1,
          2,
          3
        ], (function (x) {
            return x > 1;
          })), 1);

eq("File \"jscomp/test/bs_array_test.ml\", line 310, characters 5-12", Belt__Belt_Array.getIndexBy([
          1,
          2,
          3
        ], (function (x) {
            return x > 3;
          })), undefined);

var arr = [];

arr.push(3);

arr.push(2);

arr.push(1);

eq("File \"jscomp/test/bs_array_test.ml\", line 319, characters 5-12", arr, [
      3,
      2,
      1
    ]);

Mt.from_pair_suites("File \"jscomp/test/bs_array_test.ml\", line 321, characters 23-30", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.$$throw = $$throw;
exports.neq = neq;
exports.push = push;
exports.add = add;
exports.addone = addone;
exports.makeMatrixExn = makeMatrixExn;
exports.sumUsingForEach = sumUsingForEach;
exports.id = id;
/*  Not a pure module */