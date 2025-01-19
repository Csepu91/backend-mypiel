import { IsString, IsOptional, IsUrl, IsNumber } from 'class-validator';

export class CreatePostDto {

    @IsOptional()
    idUserComun?: string;

    @IsOptional()
    idProductUsed?: string;

    @IsString()
    body: string;

    @IsNumber()
    valoracion: number;

    @IsUrl()
    urlImagen: string;

}