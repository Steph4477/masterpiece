// merchant.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './merchant.entity';
import { MerchantController } from './merchant.controller';
import { MerchantService } from './merchant.service';

@Module({
    imports: [TypeOrmModule.forFeature([Merchant])],
    controllers: [MerchantController],
    providers: [MerchantService],
    exports: [MerchantService], // Si vous prévoyez d'exporter le service
})
export class MerchantModule {}
