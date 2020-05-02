"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["PENDING"] = "PENDING";
    ORDER_STATUS["PAID"] = "PAID";
    ORDER_STATUS["QUEUE"] = "QUEUE";
    ORDER_STATUS["PROCESSING"] = "PROCESSING";
    ORDER_STATUS["RESOLVED"] = "RESOLVED";
})(ORDER_STATUS = exports.ORDER_STATUS || (exports.ORDER_STATUS = {}));
var PAYMENT_STATUS;
(function (PAYMENT_STATUS) {
    PAYMENT_STATUS["SUCCESS"] = "SUCCESS";
    PAYMENT_STATUS["FAILED"] = "FAILED";
})(PAYMENT_STATUS = exports.PAYMENT_STATUS || (exports.PAYMENT_STATUS = {}));
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE["SUPERADMIN"] = "SUPERADMIN";
    USER_ROLE["ADMIN"] = "ADMIN";
    USER_ROLE["TABLE"] = "TABLE";
})(USER_ROLE = exports.USER_ROLE || (exports.USER_ROLE = {}));
