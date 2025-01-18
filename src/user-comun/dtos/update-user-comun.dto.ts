import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { tipeUSer } from '../schemas/user-comun.schema';

export class UpdateUserComunDto {

    @IsEnum(tipeUSer)
    RolTipe: tipeUSer = tipeUSer.EXTEND;

}




