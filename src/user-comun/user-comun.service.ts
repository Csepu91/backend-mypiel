import { Injectable, NotFoundException } from '@nestjs/common';
import { UserComun } from './schemas/user-comun.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserComunDto } from './dtos/update-user-comun.dto';

@Injectable()
export class UserComunService {
    constructor(@InjectModel(UserComun.name) private userComunModel: Model<UserComun>) { }

    async findAllComunUsers() {
        return this.userComunModel.find().exec();
    }

    async update(id: string, updateUserComunDto: UpdateUserComunDto) {
        const updatedUserComun = await this.userComunModel.findByIdAndUpdate(id, updateUserComunDto, { new: true }).exec();

        if (!updatedUserComun) {
            throw new NotFoundException(`Usuario con id: ${id} no encontrado`);
        }

        return updatedUserComun;
    }




}
