import { UUID } from 'crypto';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Auth } from '../Auth/auth.entity';

@Entity('merchant')
export class Merchant {

    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({ length: 100 })
    lastName: string;

    @Column({ length: 100 })
    firstName: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 1000 })
    password: string;

    @Column({ length: 1000 })
    passwordValidation: string;

    @Column({ length: 100 })
    siret: string;

    @Column({ length: 100 })
    headQuarter: string;

    @OneToOne(type => Auth)
    @JoinColumn()
    auth: Auth;

}