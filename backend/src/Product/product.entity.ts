import { UUID } from 'crypto';
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('product')
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: UUID;

    @Column({ nullable: true })
    image: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100 })
    description: string;

    @Column({ length: 100, nullable: true})
    category: string;

    @Column( {default: 0})
    stock: number;

    @Column( {default: 0})
    price: number;


}   