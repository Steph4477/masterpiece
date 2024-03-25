import { Controller, Res, Post, Body, HttpCode} from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantDto } from './dto/merchant.dto';
import { AuthDto } from 'src/Auth/dto/auth.dto';
import { Response } from 'express';


@Controller()
export class MerchantController {
    constructor(private readonly merchantService: MerchantService) { }

    @Post('/register')
    @HttpCode(201)
    register(@Body() merchant: MerchantDto) {
        return this.merchantService.register(merchant);
    }

    @Post('/login')
    @HttpCode(201)
    async signIn(@Body() merchant: AuthDto, @Res({ passthrough: true }) response: Response) {
        const { message, accessToken }: { message: string, accessToken: string } = await this.merchantService.signIn(merchant);
        response.cookie('auth', accessToken, { maxAge: 60 * 60 * 24, httpOnly: true });
        return { message };
    }
}

