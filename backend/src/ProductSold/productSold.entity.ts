import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class ProductSold {

    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // image: string;

    @Column()
    reference: string;

    @Column()
    merchantId: number;

    @Column()
    product_id: number;

    @Column()
    price: number;

    @Column()
    stock: number;
}   