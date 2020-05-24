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
var CategoryEntity = (function (_super) {
    __extends(CategoryEntity, _super);
    function CategoryEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryEntity.entity = {
        schema: 'main',
        name: 'category'
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], CategoryEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", Number)
    ], CategoryEntity.prototype, "category_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false
        }),
        __metadata("design:type", String)
    ], CategoryEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return _1.ItemEntity; }, function (items) { return items.category; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "items", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return CategoryEntity; }, function (category) { return category.category_ids; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return CategoryEntity; }, function (category_ids) { return category_ids.category; }),
        typeorm_1.JoinColumn({
            name: 'category_id'
        }),
        __metadata("design:type", CategoryEntity)
    ], CategoryEntity.prototype, "category_ids", void 0);
    return CategoryEntity;
}(models_1.EntityModel));
exports.CategoryEntity = CategoryEntity;
