import { Controller, Post, Body, HttpCode, ValidationPipe } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from './merchant.entity';
import { MerchantDto } from './dto/merchant.dto';

@Controller('/register')
export class MerchantController {
    constructor(private readonly merchantService: MerchantService) { }

    @Post()
    @HttpCode(201)
    async register(@Body(new ValidationPipe()) merchant: MerchantDto): Promise<Merchant | { statusCode: number }> {
        return this.merchantService.register(merchant);
    }
}
