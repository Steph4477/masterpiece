import { Controller, Post, Body, HttpCode, Req, Get, Delete, Put, Param, Patch, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    
    @Post('/merchant_id/:id')
    @HttpCode(201)
    async createProductByMerchantId(@Param('id') id: number, @Body() product: ProductDto) {
        return await this.productService.createProductByMerchantId(id, product);
    }
   

    @Get('/merchant_id/:id')
    @HttpCode(200)
    async getProductsByMerchantId(@Param('id') id: number){
        return await this.productService.getProductsByMerchantId(id);
    }


    @Delete('/:id')
    @HttpCode(200)
    async deleteProduct(@Param('id') id: string) {
        return await this.productService.deleteProduct(id);
    }

    @Put('/:id')
    @HttpCode(200)
    async updateProduct(@Param('id') id: string, @Body() product: ProductDto) {
        return await this.productService.updateProduct(id, product);
    }

    @Patch('/:id')
    @HttpCode(200)
    async partialUpdateProduct(@Param('id') id: string, @Body() product: ProductDto) {
        return await this.productService.updateProduct(id, product);
    }
}