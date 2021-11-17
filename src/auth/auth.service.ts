import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypto from 'bcrypt'
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {

    constructor(private userSevice:UserService,
        private jwtService:JwtService){}

    async login(loginUserdto:LoginUserDto){
        
    }

    async registration(createUserdto:CreateUserDto){
        const middleuser=this.userSevice.getUserByLogin(createUserdto.login);
        if(middleuser){
            throw new HttpException('пользователь с таким логином есть ',HttpStatus.BAD_REQUEST);
        }
        const hashpassword = await bcrypt.hash(createUserdto.password,6);
        const user = await this.userSevice.createUser({...createUserdto,password:hashpassword});
        return this.generateToken(user);
    }

    async generateToken(user:User){
        const payload ={
            id:user.id,
            login:user.login,
            password:user.password
        }
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
