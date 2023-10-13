"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(previous, data) {
        this.previous = previous;
        this.data = data;
    }
    Object.defineProperty(Node.prototype, "previous", {
        get: function () {
            return this._previous;
        },
        set: function (previous) {
            this._previous = previous;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
exports.Node = Node;
