import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { productEstado } from '../schemas/product.schema';


export class CreateProductDto {

    @IsString()
    nombre: string;

    @IsString()
    marca: string;

    @IsOptional()
    @IsString()
    pActivo?: string;

    @IsOptional()
    @IsString()
    enfermedad?: string;

    @IsString()
    idImagen?: string;

    @IsEnum(productEstado)
    estado: productEstado;
}