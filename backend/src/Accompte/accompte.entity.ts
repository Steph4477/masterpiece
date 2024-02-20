import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Merchant } from '../Merchant/merchant.entity';

@Entity()
export class Accompte {
    // 5. Add the @PrimaryGeneratedColumn() decorator to the id property:
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

    @Column({ length: 100 })
    siret: string;

    @Column({ length: 100 })
    headQuarter: string;

    @OneToOne(() => Accompte, merchant => merchant.id)
    merchant: Merchant;
}