import { IsString, IsNotEmpty } from 'class-validator';
import { CreateUserComunDto } from '../../user-comun/dtos/create-user-comun.dto';



export class CreateUserExtendDto extends CreateUserComunDto {
    @IsString()
    @IsNotEmpty()
    additionalProperty1: string;

    @IsString()
    additionalProperty2?: string;
}