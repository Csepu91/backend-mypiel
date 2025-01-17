import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserComun, tipeUSer } from '../../user-comun/schemas/user-comun.schema';
import { Document } from 'mongoose';


@Schema({ timestamps: true })
export class UserExtend extends UserComun {
    @Prop()
    telefono: string;

    @Prop({ type: [String], default: [] })
    roles: string[];

    @Prop({ type: Boolean, default: false })
    isVerified: boolean;

    @Prop({
        type: {
            calle: String,
            ciudad: String,
            codigoPostal: String,
            pais: String
        }
    })
    direccion: {
        calle: string;
        ciudad: string;
        codigoPostal: string;
        pais: string;
    };

    @Prop({ type: Date })
    fechaNacimiento: Date;

    @Prop({ type: Map, of: String })
    preferencias: Map<string, string>;
}

export type UserExtendDocument = UserExtend & Document;

export const UserExtendSchema = SchemaFactory.createForClass(UserExtend);