import { IsString, IsNotEmpty, IsNumber, IsOptional, IsEmail } from 'class-validator';


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

    @IsString()
    @IsOptional()
    fCreacion?: string;

}