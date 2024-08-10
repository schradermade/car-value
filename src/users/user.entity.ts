import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entity decorator tells typeorm it needs to create a table to model this class of users
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
