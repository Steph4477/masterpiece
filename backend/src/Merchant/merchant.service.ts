import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';
//import * as crypto from 'crypto';

@Injectable()
export class MerchantService {
    constructor(
        @InjectRepository(Merchant)
        private readonly merchantRepository: Repository<Merchant>,
    ) { }

    // private generateHash(password: string, salt: string): string {
    //     const hashedPassword = crypto
    //         .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    //         .toString('hex');
    //     return hashedPassword;
    // }

    async createMerchant(formData: Merchant) {
        // create salt for crypt password
        //const salt = crypto.randomBytes(16).toString('hex');

        // generate password hash
        // const hashedPassword = this.generateHash(formData.password, salt);

        // inside the merchant object, we add the password and the salt
        const merchant: Merchant = {
            ...formData,
            // password: hashedPassword,
            //salt: salt,
        };

        // save the merchant in the database
        return await this.merchantRepository.save(merchant);
    }

    async findByEmailAndPassword(email: string, password: string) {
        const user = await this.merchantRepository.findOne({ where: { email } });

        if (user) {
            // check user password with the hashed password stored in the database
            // const hashedPassword = this.generateHash(password, user.salt);
            // if (hashedPassword === user.password) {
            // Uncomment the line below to compare passwords directly
            if (password === user.password) {
                return user;
            }
        }

        return null;
    }
}
