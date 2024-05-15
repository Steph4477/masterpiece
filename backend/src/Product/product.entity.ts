import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { BaseEntityWithId } from '../BaseEntity/base.entity';

@Entity('products')
export class Product extends BaseEntityWithId {
    @Column()
    reference: string;

    @Column()
    image: string;

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





