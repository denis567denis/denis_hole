import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  import:[UserModule,
  JwtModule.register({
    secret:'denis',
    signOptions:{
      expiresIn:'1h'
    }
  })
  ]
})
export class AuthModule {}
