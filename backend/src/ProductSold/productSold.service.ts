import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSold } from './productSold.entity';
import { ProductSoldDto } from './dto/poductSold.dto';
@Injectable()
export class ProductSoldService {
    constructor(
        @InjectRepository(ProductSold)
        private readonly productsSoldRepository: Repository<ProductSold>,
    ) {}
    async createProductSold(productSold: ProductSoldDto) {
        const newProductSold = new ProductSold();
        newProductSold.reference = productSold.reference;
        newProductSold.price = productSold.price;
        newProductSold.stock = productSold.stock;
       
        return await this.productsSoldRepository.save(newProductSold);
    }

    async getMerchantProducts(merchantId: number) {
        return await this.productsSoldRepository.find({ where: { merchantId } });
    }
}
