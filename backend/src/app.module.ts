import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './Merchant/merchant.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      database: 'Database',
      username: 'useradmin',
      password: 'password',
      entities: [Merchant],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Merchant]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
