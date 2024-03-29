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
var models_1 = require("../models");
var typeorm_1 = require("typeorm");
var _1 = require(".");
var UserAccountEntity = (function (_super) {
    __extends(UserAccountEntity, _super);
    function UserAccountEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserAccountEntity.entity = {
        schema: 'main',
        name: 'user_account'
    };
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], UserAccountEntity.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserAccountEntity.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            length: 512
        }),
        __metadata("design:type", String)
    ], UserAccountEntity.prototype, "token", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return _1.UserEntity; }, function (user) { return user.account; }),
        typeorm_1.JoinColumn({
            name: 'user_id'
        }),
        __metadata("design:type", _1.UserEntity)
    ], UserAccountEntity.prototype, "user", void 0);
    return UserAccountEntity;
}(models_1.EntityModel));
exports.UserAccountEntity = UserAccountEntity;
