import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { Product } from './product.entity';
import { ProductDto } from '../Product/dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Merchant)
        private readonly merchantRepository: Repository<Merchant>,
    ) { }

    async createProductByMerchantId(id: number, product: ProductDto){
        // Find the merchant by ID
        const merchant = await this.merchantRepository.findOne({ where: { id: id } });
        // If the merchant does not exist, throw an error
        if (!merchant) {
            throw new NotFoundException(`Merchant with ID ${id} not found`);
        }
        const newProduct = new Product();
        newProduct.reference = product.reference;
        newProduct.image = product.image;
        newProduct.name = product.name;
        newProduct.description = product.description;
        newProduct.stock = product.stock;
        newProduct.price = product.price;
        newProduct.merchant = merchant
        return await this.productRepository.save(newProduct);
    }

    async findProductByReference(reference: string) {
        return await this.productRepository.findOne({ where: { reference } });
    }
    
    async getProductsByMerchantId(id: number){
        // Find the merchant by ID
        const merchant = await this.merchantRepository.find({ where: { id : id } });
        // If the merchant does not exist, throw an error
        if (!merchant) {
            throw new NotFoundException(`Merchant with ID ${id} not found`);
        }
        // Find and return the products associated with the merchant
        const products = await this.productRepository.find({ where: { merchant: merchant } });
        return products;
    }

    
    async getProduct(id: number) {
        return await this.productRepository.findOne({ where: { id: id } });
    }

    async deleteProduct(id: number) {
        return await this.productRepository.delete(id);
    }

    async updateProduct(id: number, product: ProductDto) {
        const existingProduct = await this.productRepository.findOne({ where: { id: id } });
        if (!existingProduct) {
            throw new Error('Product not found');
        }

        const updatedProduct = {
            reference: product.reference,
            name: product.name,
            description: product.description,
            stock: product.stock,
            price: product.price,
        };

        return await this.productRepository.update(id, updatedProduct);
    }
}