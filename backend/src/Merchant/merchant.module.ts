import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './merchant.entity';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { Product } from '../Product/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Merchant, Product])],
    controllers: [MerchantController],
    providers: [MerchantService],
    exports: [MerchantService],
})
export class MerchantModule { }
