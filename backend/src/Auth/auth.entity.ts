import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Merchant } from '../Merchant/merchant.entity';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Merchant, merchant => merchant.auth)
  merchant: Merchant;

}
