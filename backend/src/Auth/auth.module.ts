import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { JwtModule } from '@nestjs/jwt';
import { MerchantService } from 'src/Merchant/merchant.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant]),
    JwtModule.register({
      global: true,
      secret: '4ab59554-8833-46a0-8cfa-fe47a99add80-125c87a1-ec49-439b-98ed-d5463b0e1ae8',
      signOptions: { expiresIn: '60d' },
    }),
  ],
  providers: [MerchantService],
  exports: [MerchantService],
})
export class AuthModule { }