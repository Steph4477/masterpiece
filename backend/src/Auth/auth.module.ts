import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { JwtModule } from '@nestjs/jwt';
import { MerchantService } from '../Merchant/merchant.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [MerchantService],
  exports: [MerchantService],
})
export class AuthModule { }