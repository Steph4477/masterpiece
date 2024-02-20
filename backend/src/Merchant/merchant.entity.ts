import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

// 1. Import the @Entity() decorator and the @Column() decorator from the TypeORM package:
@Entity()
// 2. Create a Merchant class and add the @PrimaryGeneratedColumn() decorator to the id property:
export class Merchant {
    // 3. Add the @Column() properties:
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

    @OneToOne(() => Merchant, accompte => accompte.id)
    accompte: Merchant[];
}
