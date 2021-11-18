import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController],
  imports:[UserModule,
    PassportModule,
  JwtModule.register({
    secret:'denis',
    signOptions:{
      expiresIn:60000
    }
  })
  ],
  exports:[AuthService]
})
export class AuthModule {}
