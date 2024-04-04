import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    stock: number;

    @Column()
    price: number;
}   