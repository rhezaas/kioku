"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
var System = (function () {
    function System() {
    }
    System.print = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays(["" + this.strong + this.color(51) + "%s" + this.reset, "[ LOGGER ]"], args));
    };
    System.specializeLog = function (name, color) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays(["" + this.strong + this.color(color) + "%s" + this.reset, "[ " + name + " ]"], args));
    };
    System.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, __spreadArrays(["" + this.strong + this.color(208) + "%s" + this.reset, "[ WARN!! ]"], args));
    };
    System.error = function (err_number) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.error.apply(console, __spreadArrays(["" + this.strong + this.color(196) + "%s" + this.reset + this.strong + this.color(208) + "%s" + this.reset, '[ ERROR! ]', "[ " + err_number + " ]"], args));
    };
    System.strong = '\x1b[1m';
    System.reset = '\x1b[0m';
    System.color = function (code) { return "\u001B[38;5;" + code + "m"; };
    return System;
}());
exports.System = System;
