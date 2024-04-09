import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reference: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    stock: number;

    @Column()
    price: number;
}   