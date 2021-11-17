import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema,User } from './user.model';

@Module({
  import:[MongooseModule.forFeature([{ login: User.login, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  export:[UserService]
})
export class UserModule {}
