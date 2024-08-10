import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }
}

// 1. argument name is repo
// 2. private added to abbreviate prop definition and assignment
// 3. type annotation is Repository, applied generic type of type User
// 4. InjectRepository tells dependency inj system that we need User Repository
