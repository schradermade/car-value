import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entity decorator tells typeorm it needs to create a table to model this class of users
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  // method that runs some logic after a new user into db
  @AfterInsert()
  logInsert() {
    console.log('inserted with user id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('UPdated user with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('removed user with id', this.id);
  }
}
