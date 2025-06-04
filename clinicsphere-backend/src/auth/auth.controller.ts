// src/auth/auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRole } from '../users/user.schema';
import { IsString, IsEmail, MinLength, IsEnum } from 'class-validator';

class RegisterDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}

class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

class PasswordResetRequestDto {
  @IsEmail()
  email: string;
}

class PasswordResetDto {
  @IsString()
  token: string;

  @IsString()
  @MinLength(8)
  newPassword: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const { name, email, password, role } = body;
    return this.authService.register(name, email, password, role);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    return this.authService.login(await this.authService.validateUser(email, password));
  }

  @Post('password-reset/request')
  async requestPasswordReset(@Body() body: PasswordResetRequestDto) {
    return this.authService.requestPasswordReset(body.email);
  }

  @Post('password-reset')
  async resetPassword(@Body() body: PasswordResetDto) {
     const { token, newPassword } = body;
  if (!token || !newPassword) {
    throw new BadRequestException('Token and newPassword are required');
  }
    return this.authService.resetPassword(body.token, body.newPassword);
  }
}