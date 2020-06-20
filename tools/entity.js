"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTools = void 0;
var typeorm_1 = require("typeorm");
var EntityTools = (function () {
    function EntityTools() {
    }
    EntityTools.create = function (model) {
        var _a = model.entity, schema = _a.schema, name = _a.name;
        typeorm_1.Entity({ schema: schema, name: name })(model);
        return model;
    };
    return EntityTools;
}());
exports.EntityTools = EntityTools;
