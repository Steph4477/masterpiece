import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { JwtService } from '@nestjs/jwt';
import { MerchantHash } from '../Auth/auth.hash';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Merchant)
    private userRepository: Repository<Merchant>,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    try {
      const merchant = await this.userRepository.findOne({ where: { email: email } });

      if (!merchant) {
        // Handle case when user is not found
        throw new UnauthorizedException('password ou email incorrect.');
      }

      // Verify password
      const isPasswordValid = MerchantHash.verifyPassword(password, merchant.password);

      if (!isPasswordValid) {
        // Handle case when password is not valid
        throw new UnauthorizedException('password ou email incorrect.');
      }

      // If password is valid, generate and return JWT token
      const payload = { email: merchant.email, sub: merchant.id };
      const accessToken = this.jwtService.sign(payload);

      // Log the generated token
      console.log('Generated JWT token:', accessToken);

      return { message: 'Vous êtes connecté !', accessToken };
    } catch (error) {
      // Handle database or other errors
      throw error;
    }
  }
}
