import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    async login(@Body() formData: { email: string, password: string }): Promise<{ success: boolean }> {
        console.log('Received login request:', formData);

        const isMerchantCredentialsValid = await this.authService.compareMerchantCredentials(formData.email, formData.password);

        if (!isMerchantCredentialsValid) {
            throw new HttpException('Informations d\'authentification invalides', HttpStatus.UNAUTHORIZED);
        }

        // Si tout est correct, retournez un succès
        return { success: true };
    }
}
