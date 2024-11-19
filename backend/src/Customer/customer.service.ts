import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Merchant } from '../Merchant/merchant.entity';
import { Customer } from './customer.entity';
import { CustomerDto } from '../Customer/dto/customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        @InjectRepository(Merchant)
        private readonly merchantRepository: Repository<Merchant>,
    ) { }

    async createCustomerByMerchantId(id: number, customer: CustomerDto){
        // Find the merchant by ID
        const merchant = await this.merchantRepository.findOne({ where: { id: id } });
        // If the merchant does not exist, throw an error
        if (!merchant) {
            throw new NotFoundException(`Merchant with ID ${id} not found`);
        }
        const newCustomer = new Customer();
        newCustomer.reference = customer.reference;
        newCustomer.image = customer.image;
        newCustomer.name = customer.name;
        newCustomer.orders = customer.orders;
        newCustomer.average = customer.average;
        newCustomer.total = customer.total;
        newCustomer.merchant = merchant
        return await this.customerRepository.save(newCustomer);
    }

    async findCustomerByReference(reference: string) {
        return await this.customerRepository.findOne({ where: { reference } });
    }
    
    async getCustomersByMerchantId(id: number){
        // Find the merchant by ID
        const merchant = await this.merchantRepository.find({ where: { id : id } });
        // If the merchant does not exist, throw an error
        if (!merchant) {
            throw new NotFoundException(`Merchant with ID ${id} not found`);
        }
        // Find and return the customers associated with the merchant
        const customers = await this.customerRepository.find({ where: { merchant: merchant } });
        return customers;
    }

    
    async getCustomer(id: number) {
        return await this.customerRepository.findOne({ where: { id: id } });
    }

    async deleteCustomer(id: number) {
        return await this.customerRepository.delete(id);
    }

    async updateCustomer(id: number, customer: CustomerDto) {
        const existingCustomer = await this.customerRepository.findOne({ where: { id: id } });
        if (!existingCustomer) {
            throw new Error('Customer not found');
        }

        const updatedCustomer = {
            reference: customer.reference,
            name: customer.name,
            orders: customer.orders,
            average: customer.average,
            total: customer.total,
        };

        return await this.customerRepository.update(id, updatedCustomer);
    }
}