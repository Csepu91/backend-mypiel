import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserComunService } from './user-comun.service';
import { UpdateUserComunDto } from './dtos/update-user-comun.dto';

@Controller('user-comun')
export class UserComunController {
    constructor(private userComunService: UserComunService) { }

    @Get()
    @ApiOperation({ summary: 'Ejecución del servicio que muestra todos los usuarios' })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async findAllComunUsers() {
        return this.userComunService.findAllComunUsers();

    }

    @Put(':id')
    @ApiOperation({ summary: 'Ejecución del servicio que modifica el usuario identificado por id' })
    async update(@Param('id') id: string, @Body() UpdateUserComunDto: UpdateUserComunDto) {
        return this.userComunService.update(id, UpdateUserComunDto);
    }

}
