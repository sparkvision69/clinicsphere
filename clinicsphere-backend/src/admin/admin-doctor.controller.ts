import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/create-user.dto';
import { UpdateUserDto } from '../users/update-user.dto';
import { UserRole } from '../users/user.schema';
import { JwtAuthGuard } from 'src/auth/wt-auth.guard';

@Controller('admin/doctors')
@UseGuards(JwtAuthGuard) // protect routes with JWT auth guard
export class AdminDoctorController {
  constructor(private readonly usersService: UsersService) { }

  // GET /admin/doctors?page=1&limit=10
  @Get()
  async getAllDoctors(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10;
    return this.usersService.getAllUsers(pageNumber, limitNumber, UserRole.DOCTOR);
  }
  // GET /admin/doctors/:id
  @Get(':id')
  async getDoctorById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  // POST /admin/doctors
  @Post()
  async createDoctor(@Body() createUserDto: CreateUserDto) {
    // Ensure role is doctor for created user (override any incoming role)
    createUserDto.role = UserRole.DOCTOR;
    return this.usersService.createUser(createUserDto);
  }

  // PUT /admin/doctors/:id
  @Put(':id')
  async updateDoctor(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    // For admin updating doctor, pass dummy currentUser with role ADMIN
    const currentUser = { role: UserRole.ADMIN } as any;
    return this.usersService.updateUser(currentUser, id, updateUserDto);
  }

  // DELETE /admin/doctors/:id
  @Delete(':id')
  async deleteDoctor(@Param('id') id: string) {
    // For admin deleting doctor, pass dummy currentUser with role ADMIN
    const currentUser = { role: UserRole.ADMIN } as any;
    return this.usersService.deleteUser(currentUser, id);
  }
}
