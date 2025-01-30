import { IsString, IsNotEmpty, IsDate, ValidateNested, IsEmail, IsOptional, } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateUserExtendDto {

    @IsOptional()
    idUserComun?: string;

    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    fNacimiento?: Date;

    @IsString()
    @IsNotEmpty()
    nIdentificacion: string;

    @IsString()
    @IsNotEmpty()
    fContacto: string;


}