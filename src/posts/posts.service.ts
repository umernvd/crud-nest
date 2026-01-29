import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  // Create
  create(data: any) {
    return this.prisma.client.post.create({ data });
  }

  // Find All
  findAll() {
    return this.prisma.client.post.findMany();
  }

  // Find One
  findOne(id: number) {
    return this.prisma.client.post.findUnique({ where: { id } });
  }

  // Update
  update(id: number, data: any) {
    return this.prisma.client.post.update({
      where: { id },
      data,
    });
  }

  // Delete
  remove(id: number) {
    return this.prisma.client.post.delete({ where: { id } });
  }
}
