import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserComunService } from './user-comun.service';

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



}
