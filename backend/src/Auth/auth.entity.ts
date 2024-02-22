import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  //   @Column()
  //   salt: string;

}
