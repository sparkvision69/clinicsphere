import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/clinicshere'),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],        // ✅ Include AppService here
  exports: [AppService],          // ✅ Then you can export it
})
export class AppModule {}
