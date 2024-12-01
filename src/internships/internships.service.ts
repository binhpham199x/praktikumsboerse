import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InternshipsService {
  constructor(private prisma: PrismaService) {}

  async getAllInterships(page: number = 1, limit: number = 10) {
    const total = await this.prisma.internship.count();
    const totalPages = Math.ceil(total / limit);

    page = page > totalPages ? totalPages : page;

    const skip = (page - 1) * limit;
    const take = limit;

    const data = await this.prisma.internship.findMany({
      skip,
      take,
    });

    return {
      data,
      total,
      page,
      totalPages,
    };
  }
}
