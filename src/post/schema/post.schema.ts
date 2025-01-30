import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({ timestamps: true })
export class Post {

    @Prop()
    idUserComun: string;

    @Prop()
    idProductUsado: string;

    @Prop({ required: true })
    descripcion: string;

    @Prop()
    valoracion: number;

    @Prop()
    urlImagen: string;
}

export type PostDocument = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);