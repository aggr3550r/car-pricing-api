import { CreateReportDTO } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { User } from 'src/users/entities/user.entity';
import { ApproveReportDTO } from './dtos/approve-report.dto';
import { GetEstimateDTO } from './dtos/get-estimate.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    createReport(body: CreateReportDTO, user: User): Promise<import("./entities/reports.entity").Report>;
    approveReport(id: string, body: ApproveReportDTO): Promise<import("./entities/reports.entity").Report>;
    getEstimate(query: GetEstimateDTO): Promise<any>;
}
