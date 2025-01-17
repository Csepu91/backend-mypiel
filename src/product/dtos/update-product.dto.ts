import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional, IsUrl } from 'class-validator';
import { productEstado } from '../schemas/product.schema';

export class UpdateProductDto {

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    marca?: string;

    @IsOptional()
    @IsString({ each: true })
    pActivo?: string[];

    @IsOptional()
    @IsString({ each: true })
    enfermedad?: string[];

    @IsOptional()
    @IsUrl()
    urlImagen?: string;

    @IsEnum(productEstado)
    @IsOptional()
    estado: productEstado = productEstado.IN_USE;
}