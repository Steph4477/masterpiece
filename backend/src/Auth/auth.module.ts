import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Merchant } from '../Merchant/merchant.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Auth]),
    JwtModule.register({
      global: true,
      secret: '4ab59554-8833-46a0-8cfa-fe47a99add80-125c87a1-ec49-439b-98ed-d5463b0e1ae8',
      signOptions: { expiresIn: '60d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }