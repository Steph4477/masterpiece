import { Controller, Post, Body, HttpCode, Req, Get, Delete, Put, Param, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    
    @Post('/merchant_id/:id')
    @HttpCode(201)
    async createProductByMerchantId(@Param('id') id: number, @Body() product: ProductDto) {
        // Check if the product reference already exists
        const existingProduct = await this.productService.findProductByReference(product.reference);
        if (existingProduct) {
            throw new HttpException('Product reference already exists', 400);
        }
    
        // Check if mandatory fields are missing
        if (!product.name || !product.price || !product.stock || !product.description) {
            throw new HttpException('Some mandatory fields are missing', 400);
        }
    
        // Create the product
        return await this.productService.createProductByMerchantId(id, product);
    }    

    @Get('/merchant_id/:id')
    @HttpCode(200)
    async getProductsByMerchantId(@Param('id') id: number){
        return await this.productService.getProductsByMerchantId(id);
    }

    @Get('/:id')
    @HttpCode(200)
    async getProduct(@Param('id') id: number) {
        return await this.productService.getProduct(id);
    }

    @Delete('/:id')
    @HttpCode(200)
    async deleteProduct(@Param('id') id: number) {
        return await this.productService.deleteProduct(id);
    }

    @Put('/:id')
    @HttpCode(200)
    async updateProduct(@Param('id') id: number, @Body() product: ProductDto) {
        return await this.productService.updateProduct(id, product);
    }


}