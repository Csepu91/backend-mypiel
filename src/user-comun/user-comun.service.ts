import { Injectable } from '@nestjs/common';
import { UserComun } from './schemas/user-comun.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserComunService {
    constructor(@InjectModel(UserComun.name) private userComunModel: Model<UserComun>) { }

    async findAllComunUsers() {
        return this.userComunModel.find().exec();
    }



}
