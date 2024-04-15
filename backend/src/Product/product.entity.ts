import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,Table, JoinColumn, OneToMany } from 'typeorm';
import { Merchant } from '../Merchant/merchant.entity';

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

    @ManyToOne(() => Merchant, merchant => merchant)
    @JoinColumn({ name: 'merchant_id' })
    merchant: Merchant;

}   