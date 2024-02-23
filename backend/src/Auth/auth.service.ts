import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Merchant } from '../Merchant/merchant.entity';
// import * as crypto from 'crypto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth)
        private readonly authRepository: Repository<Auth>,
        @InjectRepository(Merchant)
        private readonly merchantRepository: Repository<Merchant>,
    ) { }

    async findByEmail(email: string) {
        return this.authRepository.findOne({ where: { email } });
    }

    async compareMerchantCredentials(email: string, password: string) {
        console.log('Email:', email);

        const merchant = await this.merchantRepository.findOne({ where: { email: email.toLowerCase() } });

        if (!merchant) {
            console.log('Merchant not found.');
            return false;
        }

        console.log('Merchant found. Comparing passwords...');

        // Commenting out the direct comparison and using hashed passwords
        // const isPasswordValid = await this.comparePasswords(password, merchant.password, merchant.salt);

        const isPasswordValid = password === merchant.password;

        console.log('Password comparison result:', isPasswordValid);

        if (isPasswordValid) {
            return {
                success: true,
                redirect: '/login/success',
            };
        } else {
            return false;
        }
       
    }

    // Commenting out the password hashing function for illustration purposes
    // private async comparePasswords(submittedPassword: string, storedPassword: string, salt: string): Promise<boolean> {
    //     const hashedSubmittedPassword = await this.hashPassword(submittedPassword, salt);
    //     return hashedSubmittedPassword === storedPassword;
    // }

    // Commenting out the password hashing function for illustration purposes
    // private async hashPassword(password: string, salt: string): Promise<string> {
    //     const hashedPassword = crypto
    //         .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    //         .toString('hex');
    //     return hashedPassword;
    // }
}
