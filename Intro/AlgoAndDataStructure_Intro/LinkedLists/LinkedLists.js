"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var isNullOrUndefined_1 = require("./Extensions/isNullOrUndefined");
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this._head = head;
    }
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.traverse = function () {
        var node = this.head;
        while (!(0, isNullOrUndefined_1.isNullOrUndefined)(node)) {
            console.log("Value: ".concat(node.data));
            node = node.previous;
        }
    };
    LinkedList.prototype.search = function (value) {
        var node = this.head;
        while (!(0, isNullOrUndefined_1.isNullOrUndefined)(node)) {
            if (node.data === value) {
                return true;
            }
            node = node.previous;
        }
        return false;
    };
    LinkedList.prototype.append = function (value) {
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
