import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Create
  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  // Read All
  findAll() {
    return this.usersRepository.find();
  }

  // Read One
  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  // Update
  async update(id: number, updateUserDto: any) {
    await this.usersRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  // Delete
  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
