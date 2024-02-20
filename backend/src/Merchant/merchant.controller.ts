// merchant.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from './merchant.entity'; // Ajoutez ceci

@Controller('/merchant')
export class MerchantController {
    constructor(private readonly merchantService: MerchantService) {}

    @Post()
    async create(@Body() formData: any): Promise<Merchant> {
        return this.merchantService.createMerchant(formData);
    }
}