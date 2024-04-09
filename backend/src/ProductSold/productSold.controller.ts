import { Controller, Post, Get, Body, Param, HttpCode } from '@nestjs/common';
import { ProductSoldService } from './productSold.service';
import { ProductSoldDto } from './dto/poductSold.dto';
@Controller()
export class ProductSoldController {
    constructor(private readonly productSoldService: ProductSoldService) { }

    @Post('/productSold')
    @HttpCode(201)
    async createProductSold(@Body() product: ProductSoldDto) {
        return await this.productSoldService.createProductSold(product);
    }

    @Get('/:merchantId/products')
    async getMerchantProducts(@Param('merchantId') merchantId: number){
        try {
            return await this.productSoldService.getMerchantProducts(merchantId);
        } catch (error) {
            console.error('Error fetching merchant products:', error);
            throw new Error('Internal Server Error');
        }
    }
}
