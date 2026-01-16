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
exports.BuildsController = void 0;
const common_1 = require("@nestjs/common");
const builds_service_1 = require("./builds.service");
let BuildsController = class BuildsController {
    buildsService;
    constructor(buildsService) {
        this.buildsService = buildsService;
    }
    findAll() {
        return this.buildsService.findAll();
    }
    findOne(id) {
        return this.buildsService.findOne(+id);
    }
    findByChampion(name) {
        return this.buildsService.findByChampion(name);
    }
};
exports.BuildsController = BuildsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BuildsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('champion/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BuildsController.prototype, "findByChampion", null);
exports.BuildsController = BuildsController = __decorate([
    (0, common_1.Controller)('api/builds'),
    __metadata("design:paramtypes", [builds_service_1.BuildsService])
], BuildsController);
//# sourceMappingURL=builds.controller.js.map