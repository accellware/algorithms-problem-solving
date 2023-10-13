"use strict";
/**
 *
 * @param list A comparable list of elements of T that has to be sorted
 * @returns a sorted list
 *
 * @description
 * Divide: Find the midpoint of the list and divide into sublists
 * Conquer: Recursively sort the sublists created in the previous step
 * Combine: merge the sorted sublists created in the previous step
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
var mergeSort = function (list) {
    if (list.length <= 1) {
        return list;
    }
    var splitted = split(list);
    var left = (0, exports.mergeSort)(splitted[0]);
    var right = (0, exports.mergeSort)(splitted[1]);
    return merge(left, right);
};
exports.mergeSort = mergeSort;
function split(list) {
    var midPoint = Math.floor(list.length / 2);
    return [list.slice(0, midPoint), list.slice(midPoint)];
}
function merge(left, right) {
    var lst = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            lst.push(left[i]);
            i++;
        }
        else {
            lst.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        lst.push(left[i]);
        i++;
    }
    while (j < right.length) {
        lst.push(right[j]);
        j++;
    }
    return lst;
}
var lst = [5, 3, 65, 32, 78, 95, 22, 19, 63, 51, 69, 85, 0, 1, -1];
var sorted = (0, exports.mergeSort)(lst);
console.log("Before Sort: ".concat(lst, "\nSorted: ").concat(sorted));
