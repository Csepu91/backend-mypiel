import { Body, Controller, Param, Patch, Post, Req } from '@nestjs/common';
import { UserExtendService } from './user-extend.service';
import { CreateUserExtendDto } from './dtos/create-user-extend.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user-extend')
export class UserExtendController {
    constructor(private readonly userExtendService: UserExtendService) { }

    @Post()
    @ApiOperation({ summary: 'Incorpora datos de usuario extendido y actualiza rol de userComun' })
    async create(@Body() createUserExtendDto: CreateUserExtendDto) {
        return this.userExtendService.create(createUserExtendDto);
    }


    /*     @Patch('verify/:correo')
        @ApiOperation({ summary: 'Verificar un usuario por correo electrónico' })
        async verifyUserByEmail(@Param('correo') correo: string) {
            return this.userExtendService.verifyUserByEmail(correo);
        } */
}
