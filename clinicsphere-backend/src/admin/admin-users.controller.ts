import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    Query,
    UseGuards,
    Req,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.schema';
import { JwtAuthGuard } from 'src/auth/wt-auth.guard';
import { CreateUserDto } from 'src/users/reate-user.dto';
import { UpdateUserDto } from 'src/users/update-user.dto';

@Controller('admin/users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class AdminUsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAll(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
        @Query('role') role?: UserRole,
    ) {
        return this.usersService.getAllUsers(+page, +limit, role);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.usersService.createUser(dto);
    }

    @Put(':id')
    update(@Req() req:any, @Param('id') id: string, @Body() dto: UpdateUserDto) {
        return this.usersService.updateUser(req.user, id, dto);
    }

    @Delete(':id')
    delete(@Req() req:any, @Param('id') id: string) {
        return this.usersService.deleteUser(req.user, id);
    }

}
