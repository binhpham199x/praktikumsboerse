import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { InternshipsService } from './internships.service';
import { JwtGuard } from '../auth/guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('internships')
@ApiTags('Internship')
@ApiBearerAuth('jwt')
export class InternshipsController {
  constructor(private readonly internshipsService: InternshipsService) {}

  @Get()
  getAllInternships(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.internshipsService.getAllInterships(page, limit);
  }

  @UseGuards(JwtGuard)
  @Post()
  ceateInternship() {}
}
