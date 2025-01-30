import { Type } from "class-transformer";
import { IsDate, IsOptional } from "class-validator";

export class CreateProductUsadoDto {

    @IsOptional()
    idUserComun: string;

    @IsOptional()
    idProduct: string;

    @IsDate()
    @IsOptional()
    @Type(() => Date)
    expirationDate: Date;

}
