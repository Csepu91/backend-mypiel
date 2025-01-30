import { IsString, IsNotEmpty, IsDate, ValidateNested, IsEmail, IsOptional, } from 'class-validator';
import { Type } from 'class-transformer';

/* 
class DireccionDto {
    @IsString()
    calle: string;

    @IsString()
    numero: string;

    @IsString()
    ciudad: string;

    @IsString()
    pais: string;
} */

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

    /*     @ValidateNested()
        @Type(() => DireccionDto)
        direccion?: DireccionDto; */
}