import { Controller } from '@nestjs/common';
import { InternshipsService } from './internships.service';

@Controller('internships')
export class InternshipsController {
  constructor(private readonly internshipsService: InternshipsService) {}
}
