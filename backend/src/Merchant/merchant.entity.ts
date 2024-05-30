import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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