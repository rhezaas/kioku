"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = exports.PAYMENT_STATUS = exports.ORDER_STATUS = void 0;
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["PENDING"] = "PENDING";
    ORDER_STATUS["CHECKOUT"] = "CHECKOUT";
    ORDER_STATUS["PAID"] = "PAID";
    ORDER_STATUS["QUEUE"] = "QUEUE";
    ORDER_STATUS["PROCESSING"] = "PROCESSING";
    ORDER_STATUS["READY"] = "READY";
    ORDER_STATUS["RESOLVED"] = "RESOLVED";
})(ORDER_STATUS = exports.ORDER_STATUS || (exports.ORDER_STATUS = {}));
var PAYMENT_STATUS;
(function (PAYMENT_STATUS) {
    PAYMENT_STATUS["SUCCESS"] = "SUCCESS";
    PAYMENT_STATUS["FAILED"] = "FAILED";
})(PAYMENT_STATUS = exports.PAYMENT_STATUS || (exports.PAYMENT_STATUS = {}));
var ROLES;
(function (ROLES) {
    ROLES["SUPERADMIN"] = "SUPERADMIN";
    ROLES["ADMIN"] = "ADMIN";
    ROLES["TABLE"] = "TABLE";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
