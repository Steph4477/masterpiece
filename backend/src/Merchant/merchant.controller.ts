import { Controller, Post, Body } from '@nestjs/common';
import { MerchantService } from './merchant.service';

@Controller('merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Post()
  async create(@Body() formData: any): Promise<any> {
    // Appelez votre service pour traiter les données du formulaire
    return this.merchantService.createMerchant(formData);
  }
}
