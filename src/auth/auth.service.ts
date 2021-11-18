import {HttpException, HttpStatus, Res, UnauthorizedException} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { LoginUserDto } from './dto/auth.dto';
const bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@Res() res :Response, private userSevice:UserService,private jwtService:JwtService){}

    async login(loginUserdto:LoginUserDto){
        const user = await this.userSevice.getUserByLogin(loginUserdto.login);
        const passwordEquals = await bcrypt.compare(loginUserdto.password, user.password);
        if (!(user && passwordEquals)) {
            throw new UnauthorizedException({message: 'Некорректный емайл или пароль'})  
        }
        const token=this.generateToken(user);
        return token;
    }

    async registration(createUserdto:CreateUserDto){
        const middleuser=this.userSevice.getUserByLogin(createUserdto.login);
        if(!middleuser){
            throw new HttpException('пользователь с таким логином есть ',HttpStatus.BAD_REQUEST);
        }
        const hashpassword = await bcrypt.hashSync(createUserdto.password,6);

        const user = await this.userSevice.createUser({...createUserdto,password:hashpassword});
        return this.generateToken(user);
    }

    async generateToken(user:User){
        const payload ={
            login:user.login,
            password:user.password
        }
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
