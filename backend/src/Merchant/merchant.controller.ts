import { Controller, Post, Body, HttpCode} from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantDto } from './dto/merchant.dto';
import { AuthDto } from 'src/Auth/dto/auth.dto';


@Controller()
export class MerchantController {
    constructor(private readonly merchantService: MerchantService) { }

    @Post('/register')
    @HttpCode(201)
    register(@Body() merchant: MerchantDto) {
        return this.merchantService.register(merchant);
    }

    @Post('/login')
    @HttpCode(201)
    signIn(@Body() merchant: AuthDto) {
        return this.merchantService.signIn(merchant);
    }
}

