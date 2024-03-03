import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './merchant.entity';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';
import { Auth } from '../Auth/auth.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Merchant, Auth])],
    controllers: [MerchantController],
    providers: [MerchantService],
    exports: [MerchantService],
})
export class MerchantModule { }
