import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}
    @Post()
    create(@Body userDto: CreateUserDto){
        return this.userService.createUser(userDto);
    }
}
