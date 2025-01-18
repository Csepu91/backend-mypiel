import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum tipeUSer {
    COMUN = 'COMUN',
    EXTEND = 'EXTEND',
}

@Schema({ timestamps: true })
export class UserComun {


    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    apellido1: string;

    @Prop()
    apellido2: string;

    @Prop({ required: true })
    correo: string;

    @Prop()
    password: string;

    @Prop({ default: tipeUSer.COMUN })
    RolTipe: tipeUSer;

    @Prop({ type: Boolean, default: false })
    isVerified: boolean;

}

export type UserComunDocument = UserComun & Document;

export const UserComunSchema = SchemaFactory.createForClass(UserComun);