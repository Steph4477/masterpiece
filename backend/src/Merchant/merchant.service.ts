import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';
import { MerchantDto } from './dto/merchant.dto';
import { MerchantHash } from '../Auth/auth.hash';
import { Auth } from '../Auth/auth.entity';

@Injectable()
export class MerchantService {
    constructor(
        @InjectRepository(Merchant)
        private merchantRepository: Repository<Merchant>,
        @InjectRepository(Auth)
        private authRepository: Repository<Auth>,
    ) { }

    async register(merchant: MerchantDto) {
        // Check if a merchant with the provided email already exists
        const merchantExist = await this.merchantRepository.findOne({ where: { email: merchant.email } });

        if (merchantExist) {
            console.log('Merchant with this email already exists');
            throw new BadRequestException('Merchant with this email already exists');
        }

        // Check if password and passwordValidation match
        if (merchant.password !== merchant.passwordValidation) {
            console.log('Passwords do not match');
            throw new BadRequestException('Passwords do not match');
        }

        // Generate a new salt for each user
        const salt = MerchantHash.generateSalt();

        // Use the generated salt to hash the password
        const hashedPassword = MerchantHash.hashPassword(merchant.password, salt);

        // Create a new Auth object
        const newAuthInstance = new Auth();
        newAuthInstance.email = merchant.email;
        newAuthInstance.password = hashedPassword;

        // Save the new Auth object to the database
        const savedAuth = await this.authRepository.save(newAuthInstance);

        // Create a new Merchant object
        const newMerchant = new Merchant();
        newMerchant.lastName = merchant.lastName;
        newMerchant.firstName = merchant.firstName;
        newMerchant.email = merchant.email;
        newMerchant.password = hashedPassword;
        newMerchant.passwordValidation = hashedPassword;
        newMerchant.siret = merchant.siret;
        newMerchant.headQuarter = merchant.headQuarter;

        // Set the Auth property with the saved Auth instance
        newMerchant.auth = savedAuth;

        // Save the new Merchant object to the database
        return await this.merchantRepository.save(newMerchant);
    }

    findOneById(id: any) {
        return this.merchantRepository.findOne({ where: { id: id } });
    }
}
