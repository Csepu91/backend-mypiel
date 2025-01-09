import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserComun, UserComunSchema } from 'src/user-comun/schemas/user-comun.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserComun.name, schema: UserComunSchema }
    ]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
