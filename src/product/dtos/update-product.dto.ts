import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { productEstado } from '../schemas/product.schema';

export class UpdateProduct {
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    idProducto?: number;

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
    estado: productEstado;
}