import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Merchant } from '../Merchant/merchant.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtKey} from './auth.jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([Merchant, Auth]),
        JwtModule.register({
            global: true,
            secret: jwtKey.secret,
            signOptions: { expiresIn: '60d' },
          }),
        ],
        controllers: [AuthController],
        providers: [AuthService],
        exports: [AuthService],
      })
      export class AuthModule {}