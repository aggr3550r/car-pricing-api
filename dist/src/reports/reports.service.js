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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const reports_entity_1 = require("./entities/reports.entity");
let ReportsService = class ReportsService {
    constructor(repo) {
        this.repo = repo;
    }
    create(reportDto, user) {
        const report = this.repo.create(reportDto);
        report.user = user;
        return this.repo.save(report);
    }
    async changeApprovalStatus(id, status) {
        const report = await this.repo.findOne(id);
        if (!report) {
            throw new common_1.NotFoundException("Report does not exist!");
        }
        report.approved = status;
        return this.repo.save(report);
    }
    createEstimate({ make, model, lng, lat, year, mileage }) {
        return this.repo.createQueryBuilder().
            select('AVG(price)', 'price').
            where('make =:make', { make }).
            andWhere('model = :model', { model }).
            andWhere('lng - :lng BETWEEN -5 and 5', { lng }).andWhere('lat - :lat BETWEEN -5 and 5', { lat }).andWhere('year - :year BETWEEN -3 and 3', { year }).andWhere('approved IS TRUE').
            orderBy('ABS(mileage - :mileage)', 'DESC').setParameters({ mileage }).limit(3).
            getRawOne();
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(reports_entity_1.Report)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map