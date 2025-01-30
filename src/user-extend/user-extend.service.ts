import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserExtend, UserExtendDocument } from './schemas/user-extend.schema';
import { CreateUserExtendDto } from './dtos/create-user-extend.dto';
import { Model } from 'mongoose';
import { UserComun, UserComunDocument } from 'src/user-comun/schemas/user-comun.schema';

@Injectable()
export class UserExtendService {
    constructor(
        @InjectModel(UserExtend.name) private userExtendModel: Model<UserExtendDocument>,
        @InjectModel(UserComun.name) private userComunModel: Model<UserComunDocument>


    ) { }

    async create(createUserExtendDto: CreateUserExtendDto): Promise<UserExtend> {

        const idCorreo = createUserExtendDto.correo;
        console.log(idCorreo);

        const findIdUser = await this.userComunModel.findOne({ correo: idCorreo });
        console.log(findIdUser);

        if (!findIdUser) {
            throw new NotFoundException(`Usuario con correo: ${idCorreo} no encontrado`);
        }

        const createdUserExtend = new this.userExtendModel({
            idUserComun: findIdUser._id,
            ...createUserExtendDto,
        });



        console.log(createdUserExtend);

        return createdUserExtend.save();
    }

    /*     async verifyUserByEmail(correo: string): Promise<UserExtend> {
            const user = await this.userExtendModel.findOneAndUpdate(
                { correo },
                { isVerified: true },
                { new: true }
            ).exec();
    
            if (!user) {
                throw new NotFoundException(`Usuario con correo: ${correo} no encontrado`);
            }
    
            return user;
        } */


}
