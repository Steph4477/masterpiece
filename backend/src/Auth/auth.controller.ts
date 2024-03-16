import { Controller, Post, Get, Body, HttpStatus, HttpCode, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthToken } from './auth.token';
import { AuthDto } from './dto/auth.dto';
import { response } from 'express';

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    signIn(@Body() loginDto: AuthDto) {
        return this.authService.signIn(loginDto.email, loginDto.password, response);
    }

    @UseGuards(AuthToken)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
