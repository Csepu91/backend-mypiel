import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UserComun, UserComunDocument, } from 'src/user-comun/schemas/user-comun.schema';
import { compare, hash } from 'bcrypt';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
/* import { MailerService } from '@nestjs-modules/mailer'; */



@Injectable()
export class AuthService {

  constructor(
    @InjectModel(UserComun.name)
    private readonly userComunModel: Model<UserComunDocument>,
    private readonly jwtService: JwtService,
    /*   private readonly mailerService: MailerService */
  ) { }


  async register(registerAuthDto: RegisterAuthDto) {
    const { correo, password } = registerAuthDto;

    const findUserComun = await this.userComunModel.findOne({ correo });

    if (findUserComun) {
      throw new UnauthorizedException(`Usuario con correo:"${correo}" ya existe`);
    }

    const plainToHash = await hash(password, 10);

    /*const payload = { correo: findUserComun.correo };
      const RegisterToken = await this.jwtService.signAsync(payload); */

    registerAuthDto = { ...registerAuthDto, password: plainToHash };

    const newUser = await this.userComunModel.create(registerAuthDto);

    /*await this.sendVerificationEmail(newUser.correo, RegisterToken); */

    return newUser;
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

    const LoginToken = await this.jwtService.signAsync(payload);

    const data = {
      correo,
      LoginToken,
    };

    return data;
  }
  /*   async sendVerificationEmail(email: string, token: string) {
    const url = `http://localhost:3000/auth/verify/${token}`;
    // Aquí deberías implementar la lógica para enviar el correo electrónico
    console.log(`Enviar correo a ${email} con el enlace de verificación: ${url}`);
 
    await this.mailerService.sendMail({
      to: email,
      subject: 'Verificación de cuenta',
      template: './verification', // La plantilla del correo electrónico
      context: {
        url,
      },
    });
  } */

  /*   async verifyUserByToken(token: string): Promise<UserComun> {
      const user = await this.userComunModel.findOneAndUpdate(
        { RegisterToken: token },
        { isVerified: true, RegisterToken: null },
        { new: true }
      ).exec();
  
      if (!user) {
        throw new NotFoundException(`Token de verificación no válido`);
      }
  
      return user;
    } */
}


