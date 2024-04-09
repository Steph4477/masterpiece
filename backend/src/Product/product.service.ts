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
        newProduct.reference = product.reference;
        newProduct.name = product.name;
        newProduct.description = product.description;
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

    async updateProduct(id: any, product: ProductDto) {
        const existingProduct = await this.productRepository.findOne({ where: { id: id } });;
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

    async findById(id: any) {
        return await this.productRepository.findOne({ where: { id: id } });
    }
}