import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';
import { MerchantDto } from './dto/merchant.dto';
import { merchantHash } from '../Auth/auth.hash';

@Injectable()
export class MerchantService {
    constructor(
        @InjectRepository(Merchant)
        private merchantRepository: Repository<Merchant>,
    ) { }

    async register(merchant: MerchantDto) {
        // Check if a merchant with the provided email already exists
        const merchantExist = await this.merchantRepository.findOne({ where: { email: merchant.email } });

        if (merchantExist) {
            console.log('Merchant with this email already exists');
            throw new BadRequestException('Merchant with this email already exists');
        }

        //Check if the password matches the password confirmation
        if (merchant.password !== merchant.passwordValidation) {
            console.log('Passwords do not match');
            throw new BadRequestException('Passwords do not match');
        }
        
        // Create a new Merchant object
        const newMerchant = new Merchant();
        newMerchant.lastName = merchant.lastName;
        newMerchant.firstName = merchant.firstName;
        newMerchant.email = merchant.email;
        newMerchant.password = merchant.password;
        newMerchant.passwordValidation = merchant.passwordValidation;
        newMerchant.siret = merchant.siret;
        newMerchant.headQuarter = merchant.headQuarter;
        
        // Hash the password and assign it to the "key" property
        newMerchant.key = merchantHash.hashPassword(merchant.password);

        // Save the new Merchant object to the database
        return await this.merchantRepository.save(newMerchant);
    }

    findOneById(id: any) {
        return this.merchantRepository.findOne({ where: { id: id } });
    }
}