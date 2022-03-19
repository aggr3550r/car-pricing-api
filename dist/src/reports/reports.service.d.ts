import { Repository } from 'typeorm';
import { Report } from './entities/reports.entity';
import { CreateReportDTO } from './dtos/create-report.dto';
import { User } from 'src/users/entities/user.entity';
import { GetEstimateDTO } from './dtos/get-estimate.dto';
export declare class ReportsService {
    private repo;
    constructor(repo: Repository<Report>);
    create(reportDto: CreateReportDTO, user: User): Promise<Report>;
    changeApprovalStatus(id: string, status: boolean): Promise<Report>;
    createEstimate({ make, model, lng, lat, year, mileage }: GetEstimateDTO): Promise<any>;
}
