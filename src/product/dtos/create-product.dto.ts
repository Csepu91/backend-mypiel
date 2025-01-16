import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { productEstado } from '../schemas/product.schema';


export class CreateProductDto {

    @IsString()
    nombre: string;

    @IsString()
    marca: string;

    @IsOptional()
    @IsString({ each: true })
    pActivo?: string[];

    @IsOptional()
    @IsString({ each: true })
    enfermedad?: string[];

    @IsString()
    idImagen?: string;

    @IsOptional()
    @IsEnum(productEstado)
    estado?: productEstado;
}