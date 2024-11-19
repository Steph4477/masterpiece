import { Controller, Post, Body, HttpCode, Req, Get, Delete, Put, Param, HttpException } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    
    @Post('/merchant_id/:id')
    @HttpCode(201)
    async createCustomerByMerchantId(@Param('id') id: number, @Body() customer: CustomerDto) {
        // Check if the customer reference already exists
        const existingCustomer = await this.customerService.findCustomerByReference(customer.reference);
        if (existingCustomer) {
            throw new HttpException('Customer reference already exists', 400);
        }
    
        // Check if mandatory fields are missing
        if (!customer.name || !customer.reference) {
            throw new HttpException('Some mandatory fields are missing', 400);
        }
    
        // Create the customer
        return await this.customerService.createCustomerByMerchantId(id, customer);
    }    

    @Get('/merchant_id/:id')
    @HttpCode(200)
    async getCustomersByMerchantId(@Param('id') id: number){
        return await this.customerService.getCustomersByMerchantId(id);
    }

    @Get('/:id')
    @HttpCode(200)
    async getCustomer(@Param('id') id: number) {
        return await this.customerService.getCustomer(id);
    }

    @Delete('/:id')
    @HttpCode(200)
    async deleteCustomer(@Param('id') id: number) {
        return await this.customerService.deleteCustomer(id);
    }

    @Put('/:id')
    @HttpCode(200)
    async updateCustomer(@Param('id') id: number, @Body() customer: CustomerDto) {
        return await this.customerService.updateCustomer(id, customer);
    }


}