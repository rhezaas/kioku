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
var user_1 = require("./user");
var order_item_1 = require("./order.item");
var OrderEntity = (function (_super) {
    __extends(OrderEntity, _super);
    function OrderEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderEntity.entity = {
        schema: 'main',
        name: 'order'
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], OrderEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], OrderEntity.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", Number)
    ], OrderEntity.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", Number)
    ], OrderEntity.prototype, "total", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], OrderEntity.prototype, "cancelled_at", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_1.UserEntity; }, function (user) { return user.orders; }),
        typeorm_1.JoinColumn({
            name: 'user_id'
        }),
        __metadata("design:type", user_1.UserEntity)
    ], OrderEntity.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return order_item_1.OrderItemEntity; }, function (orderItems) { return orderItems.order; }),
        __metadata("design:type", Array)
    ], OrderEntity.prototype, "orderItems", void 0);
    return OrderEntity;
}(models_1.EntityModel));
exports.OrderEntity = OrderEntity;
