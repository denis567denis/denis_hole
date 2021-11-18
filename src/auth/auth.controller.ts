import { Controller,Post ,Body} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/login')
    async login(@Body() loginUserdto:LoginUserDto){
        return this.authService.login(loginUserdto);
    }

    @Post('/registration')
    async registration(@Body() createUserdto:CreateUserDto){
        return this.authService.registration(createUserdto);
    }
}
