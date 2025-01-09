import { Transform } from "class-transformer";
import { IsEmail, MaxLength, MinLength } from "class-validator";


export class LoginAuthDto {

    @IsEmail()
    correo: string;

    @Transform(({ value }: { value: string }) => value.trim())
    @MinLength(8)
    @MaxLength(12)
    password: string;
}

