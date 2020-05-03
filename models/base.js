"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
var BaseModel = (function () {
    function BaseModel(name, number) {
        var _this = this;
        this.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return tools_1.LoggerTools.log.apply(tools_1.LoggerTools, __spreadArrays([_this.__name, _this.__color], args));
        };
        this.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return tools_1.LoggerTools.warn.apply(tools_1.LoggerTools, args);
        };
        this.error = function (err_number) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return tools_1.LoggerTools.error.apply(tools_1.LoggerTools, __spreadArrays([err_number], args));
        };
        this.__name = name.toUpperCase();
        this.__color = number;
    }
    return BaseModel;
}());
exports.BaseModel = BaseModel;