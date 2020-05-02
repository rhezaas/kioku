"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("models");
var typeorm_1 = require("typeorm");
var entities_1 = require("entities");
var UserRoleEntity = (function (_super) {
    __extends(UserRoleEntity, _super);
    function UserRoleEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRoleEntity.entity = {
        schema: 'main',
        name: 'user_role'
    };
    __decorate([
        typeorm_1.PrimaryColumn({
            nullable: false
        }),
        __metadata("design:type", Number)
    ], UserRoleEntity.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar'
        }),
        __metadata("design:type", String)
    ], UserRoleEntity.prototype, "role", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return entities_1.UserEntity; }, function (user) { return user.roles; }),
        typeorm_1.JoinColumn({
            name: 'user_id'
        }),
        __metadata("design:type", entities_1.UserEntity)
    ], UserRoleEntity.prototype, "user", void 0);
    return UserRoleEntity;
}(models_1.EntityModel));
exports.UserRoleEntity = UserRoleEntity;