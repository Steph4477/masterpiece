import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntityWithId } from '../BaseEntity/base.entity';

@Entity('merchants')
export class Merchant  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    siret: string;

    @Column()
    email: string;

    @Column()
    password: string;
}