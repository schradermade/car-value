import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    // if User entity instance is not created first
    // hooks won't be executed in rest of app; example: @AfterInsert()
    // --> passing plain object into repo.save wont call hooks
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  find(email: string) {
    const users = this.repo.find({ where: { email } });
    if (!users) {
      return '';
    }

    return users;
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    Object.assign(user, attrs);

    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('No user found.');
    }
    return this.repo.remove(user);
  }
}

// 1. argument name is repo
// 2. private added to abbreviate prop definition and assignment
// 3. type annotation is Repository, applied generic type of type User
// 4. InjectRepository tells dependency inj system that we need User Repository
