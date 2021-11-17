import { Injectable } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User,USerDocument } from './user.model';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.login) private userModel: Model<USerDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async getUserByLogin(login :string){
      const user =this.userRepository.findOne({where:login});
      return user;
  }
}
