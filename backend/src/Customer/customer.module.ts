import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Merchant } from '../Merchant/merchant.entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';


@Module({
    imports: [TypeOrmModule.forFeature([Customer, Merchant])],
    controllers: [CustomerController],
    providers: [CustomerService],
    exports: [CustomerService],
})
export class CustomerModule { }
