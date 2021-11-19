import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.URL_MONGODB), UserModule, AuthModule,],
  controllers: [UserController, AuthController],
  providers: [UserModule, AuthModule],
})
export class AppModule {}
