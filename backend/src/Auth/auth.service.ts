import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Merchant)
    private userRepository: Repository<Merchant>,
    private jwtService: JwtService,
  ) { }

  async signIn(email: string, password: string): Promise<any> {
    const tableMerchant = await this.userRepository.find();
    const merchant = await tableMerchant.find(
      (tableUsers) => tableUsers.email === email,
    );
  }
}
