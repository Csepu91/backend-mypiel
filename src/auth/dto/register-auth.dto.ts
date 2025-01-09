import { PartialType } from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(15)
    nombre: string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(15)
    apellido1: string;

    @IsOptional()
    apellido2?: string;

    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @Transform(({ value }: { value: string }) => value.trim())
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(12)
    password: string;

}
