import { IsString, IsNotEmpty, IsOptional, IsEnum, IsUrl } from 'class-validator';
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

    @IsUrl()
    urlImagen: string;


}