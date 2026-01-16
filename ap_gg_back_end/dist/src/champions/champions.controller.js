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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionsController = void 0;
const common_1 = require("@nestjs/common");
const champions_service_1 = require("./champions.service");
let ChampionsController = class ChampionsController {
    championsService;
    constructor(championsService) {
        this.championsService = championsService;
    }
    findAll() {
        return this.championsService.findAll();
    }
    findOne(id) {
        return this.championsService.findOne(+id);
    }
    findByRole(role) {
        return this.championsService.findByRole(role);
    }
};
exports.ChampionsController = ChampionsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChampionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChampionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('role/:role'),
    __param(0, (0, common_1.Param)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChampionsController.prototype, "findByRole", null);
exports.ChampionsController = ChampionsController = __decorate([
    (0, common_1.Controller)('api/champions'),
    __metadata("design:paramtypes", [champions_service_1.ChampionsService])
], ChampionsController);
//# sourceMappingURL=champions.controller.js.map