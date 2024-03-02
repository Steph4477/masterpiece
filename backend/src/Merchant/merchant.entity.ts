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

    @Column({ length: 100 })
    password: string;

    @Column({ length: 100, nullable: false})
    passwordValidation: string;

    @Column({ type: 'varchar', length: 500, nullable: false })
    key: string;

    @Column({ length: 100 })
    siret: string;

    @Column({ length: 100 })
    headQuarter: string;

    @OneToOne(type => Auth)
    @JoinColumn()
    auth: Auth;

}