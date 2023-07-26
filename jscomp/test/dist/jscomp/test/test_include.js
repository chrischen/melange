// Generated by Melange
'use strict';

var Stdlib__List = require("melange/list.js");
var Stdlib__String = require("melange/string.js");
var Test_order = require("./test_order.js");

function Make(U) {
  var compare = U.compare;
  return {
          compare: compare,
          v: compare
        };
}

var X = {
  compare: Stdlib__String.compare,
  v: Stdlib__String.compare
};

var U = {
  compare: Test_order.compare,
  v: Test_order.compare
};

var v = Stdlib__List.length;

var length = Stdlib__List.length;

var compare_lengths = Stdlib__List.compare_lengths;

var compare_length_with = Stdlib__List.compare_length_with;

var cons = Stdlib__List.cons;

var hd = Stdlib__List.hd;

var tl = Stdlib__List.tl;

var nth = Stdlib__List.nth;

var nth_opt = Stdlib__List.nth_opt;

var rev = Stdlib__List.rev;

var init = Stdlib__List.init;

var append = Stdlib__List.append;

var rev_append = Stdlib__List.rev_append;

var concat = Stdlib__List.concat;

var flatten = Stdlib__List.flatten;

var equal = Stdlib__List.equal;

var compare = Stdlib__List.compare;

var iter = Stdlib__List.iter;

var iteri = Stdlib__List.iteri;

var map = Stdlib__List.map;

var mapi = Stdlib__List.mapi;

var rev_map = Stdlib__List.rev_map;

var filter_map = Stdlib__List.filter_map;

var concat_map = Stdlib__List.concat_map;

var fold_left_map = Stdlib__List.fold_left_map;

var fold_left = Stdlib__List.fold_left;

var fold_right = Stdlib__List.fold_right;

var iter2 = Stdlib__List.iter2;

var map2 = Stdlib__List.map2;

var rev_map2 = Stdlib__List.rev_map2;

var fold_left2 = Stdlib__List.fold_left2;

var fold_right2 = Stdlib__List.fold_right2;

var for_all = Stdlib__List.for_all;

var exists = Stdlib__List.exists;

var for_all2 = Stdlib__List.for_all2;

var exists2 = Stdlib__List.exists2;

var mem = Stdlib__List.mem;

var memq = Stdlib__List.memq;

var find = Stdlib__List.find;

var find_opt = Stdlib__List.find_opt;

var find_map = Stdlib__List.find_map;

var filter = Stdlib__List.filter;

var find_all = Stdlib__List.find_all;

var filteri = Stdlib__List.filteri;

var partition = Stdlib__List.partition;

var partition_map = Stdlib__List.partition_map;

var assoc = Stdlib__List.assoc;

var assoc_opt = Stdlib__List.assoc_opt;

var assq = Stdlib__List.assq;

var assq_opt = Stdlib__List.assq_opt;

var mem_assoc = Stdlib__List.mem_assoc;

var mem_assq = Stdlib__List.mem_assq;

var remove_assoc = Stdlib__List.remove_assoc;

var remove_assq = Stdlib__List.remove_assq;

var split = Stdlib__List.split;

var combine = Stdlib__List.combine;

var sort = Stdlib__List.sort;

var stable_sort = Stdlib__List.stable_sort;

var fast_sort = Stdlib__List.fast_sort;

var sort_uniq = Stdlib__List.sort_uniq;

var merge = Stdlib__List.merge;

var to_seq = Stdlib__List.to_seq;

var of_seq = Stdlib__List.of_seq;

exports.v = v;
exports.Make = Make;
exports.X = X;
exports.U = U;
exports.length = length;
exports.compare_lengths = compare_lengths;
exports.compare_length_with = compare_length_with;
exports.cons = cons;
exports.hd = hd;
exports.tl = tl;
exports.nth = nth;
exports.nth_opt = nth_opt;
exports.rev = rev;
exports.init = init;
exports.append = append;
exports.rev_append = rev_append;
exports.concat = concat;
exports.flatten = flatten;
exports.equal = equal;
exports.compare = compare;
exports.iter = iter;
exports.iteri = iteri;
exports.map = map;
exports.mapi = mapi;
exports.rev_map = rev_map;
exports.filter_map = filter_map;
exports.concat_map = concat_map;
exports.fold_left_map = fold_left_map;
exports.fold_left = fold_left;
exports.fold_right = fold_right;
exports.iter2 = iter2;
exports.map2 = map2;
exports.rev_map2 = rev_map2;
exports.fold_left2 = fold_left2;
exports.fold_right2 = fold_right2;
exports.for_all = for_all;
exports.exists = exists;
exports.for_all2 = for_all2;
exports.exists2 = exists2;
exports.mem = mem;
exports.memq = memq;
exports.find = find;
exports.find_opt = find_opt;
exports.find_map = find_map;
exports.filter = filter;
exports.find_all = find_all;
exports.filteri = filteri;
exports.partition = partition;
exports.partition_map = partition_map;
exports.assoc = assoc;
exports.assoc_opt = assoc_opt;
exports.assq = assq;
exports.assq_opt = assq_opt;
exports.mem_assoc = mem_assoc;
exports.mem_assq = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq = remove_assq;
exports.split = split;
exports.combine = combine;
exports.sort = sort;
exports.stable_sort = stable_sort;
exports.fast_sort = fast_sort;
exports.sort_uniq = sort_uniq;
exports.merge = merge;
exports.to_seq = to_seq;
exports.of_seq = of_seq;
/* No side effect */
