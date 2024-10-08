import { Controller, Get, Logger, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/guard';

@Controller('user')
@UseGuards(JwtGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('info')
  getInfo(@Request() req) {
    Logger.log(req);
    Logger.log(req.user);
    return req.user;
  }
}
