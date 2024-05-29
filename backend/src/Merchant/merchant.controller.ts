import { Controller, Post, Body, HttpCode, BadRequestException } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantDto } from './dto/merchant.dto';
import { AuthDto } from '../Auth/dto/auth.dto';

@Controller()
export class MerchantController {
    constructor(private readonly merchantService: MerchantService) { }

    @Post('/register')
    @HttpCode(201)
    async register(@Body() merchant: MerchantDto) {
        try {
            await this.merchantService.register(merchant);
            return { message: 'Compte créé avec succès' };
        } catch (error) {
            // Vérifiez le type d'erreur et renvoyez un message approprié
            if (error instanceof BadRequestException) {
                throw new BadRequestException(error.message);
            } else {
                throw new BadRequestException('Une erreur est survenue lors de la création du compte');
            }
        }
    }

    @Post('/login')
    @HttpCode(201)
    async login(@Body() merchant: AuthDto) {
        try {
            const { accessToken } = await this.merchantService.login(merchant);
            return { accessToken };
        } catch (error) {
            // Vérifiez le type d'erreur et renvoyez un message approprié
            if (error instanceof BadRequestException) {
                throw new BadRequestException(error.message);
            } else {
                throw new BadRequestException('Une erreur est survenue lors de la connexion');
            }
        }
    }
}
