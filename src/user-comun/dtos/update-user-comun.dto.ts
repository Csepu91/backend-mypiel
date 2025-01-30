import { IsEnum } from 'class-validator';
import { tipeUSer } from '../schemas/user-comun.schema';

export class UpdateUserComunDto {

    @IsEnum(tipeUSer)
    rolTipe: tipeUSer = tipeUSer.EXTEND;

}




