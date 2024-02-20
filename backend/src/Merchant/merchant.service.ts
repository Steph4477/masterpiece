import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from './merchant.entity';

@Injectable()
export class MerchantService {
    constructor(
        @InjectRepository(Merchant)
        private readonly merchantRepository: Repository<Merchant>,
    ) {}

    async createMerchant(formData: Merchant): Promise<Merchant> {
        return await this.merchantRepository.save(formData);
    }
}
