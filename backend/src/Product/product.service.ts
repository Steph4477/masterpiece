import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    async createProduct(product: ProductDto) {
        const newProduct = new Product();
        newProduct.image = product.image;
        newProduct.name = product.name;
        newProduct.description = product.description;
        newProduct.category = product.category;
        newProduct.stock = product.stock;
        newProduct.price = product.price;

        return await this.productRepository.save(newProduct);
    }

    async findAll() {
        return await this.productRepository.find();
    }

    async deleteProduct(id: string) {
        return await this.productRepository.delete(id);
    }
}