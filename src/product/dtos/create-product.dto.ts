import { IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateProductDto {

    @IsString()
    nombre: string;

    @IsString()
    marca: string;

    @IsString()
    empresa: string;

    @IsOptional()
    @IsString({ each: true })
    pActivo?: string[];

    @IsOptional()
    @IsString({ each: true })
    usos?: string[];

    @IsUrl()
    urlImagen: string;


}