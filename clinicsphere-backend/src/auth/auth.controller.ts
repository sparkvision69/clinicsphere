import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserRole } from 'src/users/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() body: any) {
    const { name, email, password, role } = body;

    if (!name || !email || !password) {
      throw new BadRequestException('Name, email, and password are required');
    }
    // Validate role or set default
    const userRole = Object.values(UserRole).includes(role) ? role : UserRole.PATIENT;

    try {
      const user = await this.authService.register(name, email, password, userRole);
      return { message: 'User registered successfully', user };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = await this.authService.validateUser(email, password);
    return this.authService.login(user);
  }
}
