import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserComun, tipeUSer } from '../../user-comun/schemas/user-comun.schema';
import { Document } from 'mongoose';


@Schema({ timestamps: true })
export class UserExtend {

    @Prop()
    idUserComun: string;

    @Prop({ type: Date })
    fNacimiento: Date;

    @Prop({ required: true })
    nIdentificacion: string;

    @Prop()
    fContacto: string;

    @Prop({
        type: {
            calle: String,
            numero: String,
            ciudad: String,
            pais: String
        },
        _id: false
    })
    direccion: {
        calle: string;
        numero: string;
        ciudad: string;
        pais: string;
    };
}

export type UserExtendDocument = UserExtend & Document;

export const UserExtendSchema = SchemaFactory.createForClass(UserExtend);