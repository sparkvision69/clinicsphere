import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

class GetProfileDto {
  id: string;
}

@Controller('users')  // changed from 'auth' to 'users'
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('profile')
  async getProfile(@Body() body: GetProfileDto) {
    const { id } = body;

    if (!id) {
      throw new BadRequestException('User ID is required');
    }

    try {
      const user = await this.usersService.GetProfile(id);
      return { message: 'User fetched successfully', user };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
