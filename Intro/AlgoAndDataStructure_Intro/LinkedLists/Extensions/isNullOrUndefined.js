"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullOrUndefined = void 0;
var isNullOrUndefined = function (value) {
    if (value == null) {
        return true;
    }
    if (value === null) {
        return true;
    }
    if (typeof value === 'undefined') {
        return true;
    }
    return false;
};
exports.isNullOrUndefined = isNullOrUndefined;
