import { PartialType } from '@nestjs/swagger';
import { CreateProductUsadoDto } from './create-product-usado.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { productEstado } from '../schemas/productUsado.schema';


export class UpdateProductUsadoDto {

    @IsEnum(productEstado)
    @IsOptional()
    estado: productEstado = productEstado.ON_DISPLAY;

}

