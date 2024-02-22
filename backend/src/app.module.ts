import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantModule } from './Merchant/merchant.module';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [
    MerchantModule,AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      database: 'Database',
      username: 'useradmin',
      password: 'password',
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
