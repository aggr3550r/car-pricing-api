import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { AdminGuard } from 'src/guards/admin.guard';
import { CreateReportDTO } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ReportDTO } from './dtos/report.dto';
import { ApproveReportDTO } from './dtos/approve-report.dto';
import { GetEstimateDTO} from './dtos/get-estimate.dto';


@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) {}

    @Post()
    @UseGuards(AuthGuard)
    @Serialize(ReportDTO)
    createReport(@Body() body: CreateReportDTO, @CurrentUser() user: User) {
       return this.reportsService.create(body, user);
    }

    @Patch('/:id')
    @UseGuards(AdminGuard)
    approveReport(@Param('id') id: string, @Body() body: ApproveReportDTO) {
        return this.reportsService.changeApprovalStatus(id, body.approved);
    }

    @Get()
    getEstimate(@Query() query: GetEstimateDTO) {
        return this.reportsService.createEstimate(query);
    }
}
