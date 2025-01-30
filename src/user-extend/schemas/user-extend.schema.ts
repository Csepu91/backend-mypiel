import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
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
}

export type UserExtendDocument = UserExtend & Document;

export const UserExtendSchema = SchemaFactory.createForClass(UserExtend);