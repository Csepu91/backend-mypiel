import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UserComun, UserComunDocument, } from 'src/user-comun/schemas/user-comun.schema';
import { compare, hash } from 'bcrypt';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {

  constructor(@InjectModel(UserComun.name) private readonly userComunModel: Model<UserComunDocument>,
    private readonly jwtService: JwtService
  ) { }


  async register(registerAuthDto: RegisterAuthDto) {
    const { correo, password } = registerAuthDto;

    const findUserComun = await this.userComunModel.findOne({ correo });

    if (findUserComun) {
      throw new UnauthorizedException(`Usuario con correo:"${correo}" ya existe`);
    }

    const plainToHash = await hash(password, 10);

    registerAuthDto = { ...registerAuthDto, password: plainToHash };

    return this.userComunModel.create(registerAuthDto);
  }


  async login(loginAuthDto: LoginAuthDto) {
    const { correo, password } = loginAuthDto;

    const findUserComun = await this.userComunModel.findOne({ correo });

    if (!findUserComun) {
      throw new NotFoundException(`Usuario con correo:"${correo}" no encontrado`);
    }

    const checkPassword = await compare(password, findUserComun.password);

    if (!checkPassword) {
      throw new UnauthorizedException('Contraseña incorrecta!');
    }

    const payload = { correo: findUserComun.correo };

    const token = await this.jwtService.signAsync(payload);

    const data = {
      correo,
      token,
    };

    return data;
  }

}
