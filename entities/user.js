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
var enum_1 = require("../enum");
var UserEntity = (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserEntity.entity = {
        schema: 'main',
        name: 'user'
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            nullable: false
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: Object.keys(enum_1.USER_ROLE)
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "role", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return _1.OrderEntity; }, function (orders) { return orders.user; }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "orders", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return _1.UserAccountEntity; }, function (account) { return account.user; }),
        __metadata("design:type", _1.UserAccountEntity)
    ], UserEntity.prototype, "account", void 0);
    return UserEntity;
}(models_1.EntityModel));
exports.UserEntity = UserEntity;
