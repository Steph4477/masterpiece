import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MerchantModule } from '../Merchant/merchant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Merchant } from '../Merchant/merchant.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Auth, Merchant]),
        MerchantModule,
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}