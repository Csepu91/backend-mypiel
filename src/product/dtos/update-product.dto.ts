import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { productEstado } from '../schemas/product.schema';

export class UpdateProduct {

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
    estado: productEstado = productEstado.IN_USE;
}