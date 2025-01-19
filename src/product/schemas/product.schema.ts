import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema({ timestamps: true })
export class Product {

    @Prop()
    nombre: string;

    @Prop()
    marca: string;

    @Prop()
    empresa: string;

    @Prop([String])
    pActivo: string[];

    @Prop([String])
    usos: string[];

    @Prop()
    urlImagen: string;

}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);