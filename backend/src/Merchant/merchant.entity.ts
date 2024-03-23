import { UUID } from 'crypto';
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('merchant')
export class Merchant {

    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({ length: 100 })
    siret: string;

    @Column({ length: 100 })
    email: string;

    @Column({ length: 1000 })
    password: string;
}