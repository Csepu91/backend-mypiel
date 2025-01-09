import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { productEstado } from '../schemas/product.schema';


export class CreateProductDto {

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    marca?: string;

    @IsOptional()
    @IsString()
    pActivo?: string;

    @IsOptional()
    @IsString()
    enfermedad?: string;

    @IsOptional()
    @IsString()
    idImagen?: string;

    @IsEnum(productEstado)
    @IsOptional()
    estado?: productEstado;
}