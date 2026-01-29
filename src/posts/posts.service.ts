import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  // Create
  create(data: any) {
    return this.prisma.post.create({ data });
  }

  // Find All
  findAll() {
    return this.prisma.post.findMany();
  }

  // Find One
  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  // Update
  update(id: number, data: any) {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  // Delete
  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
