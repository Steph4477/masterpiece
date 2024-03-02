import { Controller, Post, Get, Body, HttpException, HttpStatus, HttpCode, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authToken } from './auth.token';
import { AuthDto } from './dto/auth.dto';


@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    signIn(@Body() loginDto: AuthDto) {
        return this.authService.signIn(loginDto.email, loginDto.password);
    }

    @UseGuards(authToken)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
