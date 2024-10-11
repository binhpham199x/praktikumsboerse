import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserInfoResponseDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserInfo(
    currentUser: any,
    requestedUserId: number,
  ): Promise<UserInfoResponseDto> {
    // If the current user is an admin, they can access any user's info
    if (currentUser.role === 'ADMIN') {
      return this.findUserById(requestedUserId);
    }

    // If the current user is not an admin, they can only access their own info
    if (currentUser.userId !== requestedUserId) {
      throw new ForbiddenException(
        'You are only allowed to access your own information',
      );
    }

    return this.findUserById(currentUser.id);
  }

  // Method to find a user by ID using Prisma
  async findUserById(id: number): Promise<UserInfoResponseDto> {
    const user = await this.prisma.user.findFirst({
      where: {
        userId: id,
      },
    });

    if (!user) {
      throw new ForbiddenException('User not found');
    }
    delete user.hash;

    return user;
  }
}
