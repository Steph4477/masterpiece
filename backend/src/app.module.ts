import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantModule } from './Merchant/merchant.module';
import { AuthModule } from './Auth/auth.module';
import { ProductModule } from './Product/product.module';
import { CustomerModule } from './Customer/customer.module';

@Module({
  imports: [
    MerchantModule,AuthModule,ProductModule,CustomerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/**/*.entity.ts'],
      synchronize: false,
      autoLoadEntities: true,
      logging: true,
      //ssl: true,
      ssl: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
