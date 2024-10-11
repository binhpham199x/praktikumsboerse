import { Controller, Get, Logger, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('user')
@UseGuards(JwtGuard)
@ApiBearerAuth('jwt')
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('info')
  getInfo(@Request() req) {
    Logger.log(req);
    Logger.log(req.user);
    return req.user;
  }
}
