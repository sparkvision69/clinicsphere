import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AdminUsersController } from './admin-users.controller';
import { AdminDoctorController } from './admin-doctor.controller';

@Module({
  imports: [UsersModule],
  controllers: [AdminUsersController, AdminDoctorController],
})
export class AdminModule {}
