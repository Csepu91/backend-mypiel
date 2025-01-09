import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserComunDocument = UserComun & Document;


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

}

export const UserComunSchema = SchemaFactory.createForClass(UserComun);