import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { productStatus } from '../schemas/product.schema';

export class CreateProductDto {
    @IsNumber()
    @IsNotEmpty()
    idproducto: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    marca?: string;

    @IsOptional()
    @IsString()
    Pactivo?: string;

    @IsOptional()
    @IsString()
    Enfermedad?: string;

    @IsOptional()
    @IsString()
    idImagen?: string;

    @IsEnum(productStatus)
    @IsOptional()
    status?: productStatus;
}