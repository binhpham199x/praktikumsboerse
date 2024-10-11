import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard';
import { UserInfoResponseDto } from './dto';
import { GetUser } from '../auth/decorator/getUser.decorator';
import { User } from '@prisma/client';

@Controller('users')
@UseGuards(JwtGuard)
@ApiTags('Users')
@ApiBearerAuth('jwt')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/info')
  @ApiResponse({
    status: 200,
    description: 'User info retrieved successfully',
    type: UserInfoResponseDto,
  })
  getUserInfo(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() currentUser: User,
  ): Promise<UserInfoResponseDto> {
    return this.usersService.getUserInfo(currentUser, id);
  }

  @Get('info')
  @ApiResponse({
    status: 200,
    description: 'User info retrieved successfully',
    type: UserInfoResponseDto,
  })
  getCurrentUserInfo(
    @GetUser('userId') userId: number,
    @GetUser() currentUser: User,
  ): Promise<UserInfoResponseDto> {
    return this.usersService.getUserInfo(currentUser, userId);
  }
}
