import { Controller, Delete, Post, Get, Body, HttpCode, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post('/product')
    @HttpCode(201)
    async createProduct(@Body() product: ProductDto) {
        return await this.productService.createProduct(product);
    }

    @Get('/product')
    @HttpCode(200)
    async getAllProducts() {
        return await this.productService.findAll();
    }

    @Delete('/product/:id')
    @HttpCode(200)
    async deleteProduct(@Param('id') id: string) {
        return await this.productService.deleteProduct(id);
    }

}