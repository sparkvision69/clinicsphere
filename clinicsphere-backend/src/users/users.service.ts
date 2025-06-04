import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument, UserRole } from './user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async createUser(name: string, email: string, password: string, role: UserRole) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new this.userModel({ name, email, password: hashedPassword, role });
    return createdUser.save();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (!user) return null;
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) return null;
    return user;
  }

  async GetProfile(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new BadRequestException("not Found user")
    }
    return user
  }
}
