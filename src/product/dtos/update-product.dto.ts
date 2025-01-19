import { IsString, IsEnum, IsOptional, IsUrl } from 'class-validator';


export class UpdateProductDto {

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    marca?: string;

    @IsOptional()
    @IsString()
    empresa?: string;

    @IsOptional()
    @IsString({ each: true })
    pActivo?: string[];

    @IsOptional()
    @IsString({ each: true })
    usos?: string[];

    @IsOptional()
    @IsUrl()
    urlImagen?: string;

}