import { Controller, UseGuards } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard';

@Controller('applications')
@UseGuards(JwtGuard)
@ApiTags('Internship')
@ApiBearerAuth('jwt')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}
}
