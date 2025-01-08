import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum productEstado {
    IN_USE = 'IN_USE',
    ON_DISPLAY = 'ON_DISPLAY',
}


@Schema()
export class Product {
    @Prop({ required: true })
    idProducto: number;

    @Prop()
    nombre: string;

    @Prop()
    marca: string;

    @Prop()
    pActivo: string;

    @Prop()
    enfermedad: string;

    @Prop()
    idImagen: string;

    @Prop({ default: productEstado.ON_DISPLAY })
    estado: productEstado;
}

export const ProductSchema = SchemaFactory.createForClass(Product);