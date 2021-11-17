import { Controller } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/auth.dto';

@ApiTags('авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/login')
    login(@Body() loginUserdto:LoginUserDto){
        return this.authService.login(loginUserdto);
    }

    @Post('/registration')
    registration(@Body() createUserdto:CreateUserDto){
        return this.authService.registration(createUserdto);
    }
}
