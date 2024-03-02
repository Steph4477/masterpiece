import { Controller, Post, Body } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from './merchant.entity';
import { MerchantDto } from './dto/merchant.dto';

@Controller('/merchant')
export class MerchantController {
    constructor(private readonly merchantService: MerchantService) { }

    @Post()
    async register(@Body() merchant: MerchantDto): Promise<Merchant | { statusCode: number }> {
        const registerMerchant = await this.merchantService.register(merchant);
        if (registerMerchant) {
            return { statusCode: 201 };
        } else {
            return { statusCode: 400 };
        }
    }
}