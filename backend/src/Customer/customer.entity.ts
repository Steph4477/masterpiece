import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { BaseEntityWithId } from '../BaseEntity/base.entity';

@Entity('customers')
export class Customer extends BaseEntityWithId{
    @Column()
    reference: string;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    orders: number;

    @Column()
    average: number;

    @Column()
    total: number;

    @ManyToOne(() => Merchant, merchant => merchant)
    @JoinColumn({ name: 'merchant_id' })
    merchant: Merchant;
}


