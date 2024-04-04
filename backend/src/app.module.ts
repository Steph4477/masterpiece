import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantModule } from './Merchant/merchant.module';
import { AuthModule } from './Auth/auth.module';
import { ProductModule } from './Product/product.module';

@Module({
  imports: [
    MerchantModule,AuthModule,ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      database: 'Database',
      username: 'useradmin',
      password: 'password',
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: false,
      autoLoadEntities: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
