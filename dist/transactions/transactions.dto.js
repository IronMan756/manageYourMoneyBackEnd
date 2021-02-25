"use strict";
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
const swagger_1 = require("@nestjs/swagger");
class TransactionsDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "purseIdTo", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "purseIdFrom", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "incomeId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "expenceId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], TransactionsDto.prototype, "suma", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], TransactionsDto.prototype, "data", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], TransactionsDto.prototype, "categoryId", void 0);
exports.TransactionsDto = TransactionsDto;
//# sourceMappingURL=transactions.dto.js.map