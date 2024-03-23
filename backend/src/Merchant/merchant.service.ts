import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';
import { MerchantDto } from './dto/merchant.dto';
import { AuthDto } from 'src/Auth/dto/auth.dto';
import { MerchantHash } from '../Auth/auth.hash';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MerchantService {
    constructor(
        @InjectRepository(Merchant)
        private merchantRepository: Repository<Merchant>,
        private jwtService: JwtService,
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

        // Create a new Merchant object
        const newMerchant = new Merchant();
        newMerchant.email = merchant.email;
        newMerchant.password = hashedPassword;
        newMerchant.siret = merchant.siret;

        // Save the new Merchant object to the database
        return await this.merchantRepository.save(newMerchant);
    }

    async signIn(authDto: AuthDto): Promise<any> {
        try {
            const merchant = await this.merchantRepository.findOne({ where: { email: authDto.email } });
    
            if (!merchant) {
                // Handle case when user is not found
                throw new UnauthorizedException('password ou email incorrect.');
            }
    
            // Verify password
            const isPasswordValid = MerchantHash.verifyPassword(authDto.password, merchant.password);
    
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

    findOneById(id: any) {
        return this.merchantRepository.findOne({ where: { id: id } });
    }
}
