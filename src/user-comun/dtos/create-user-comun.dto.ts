import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEmail, IsDate, ValidateNested } from 'class-validator';


export class CreateUserComunDto {


    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido1: string;

    @IsString()
    @IsOptional()
    apellido2?: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    correo: string;

}