import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum productStatus {
    IN_USE = 'IN_USE',
    ON_DISPLAY = 'ON_DISPLAY',
}


@Schema()
export class Product {
    @Prop({ required: true })
    idproducto: number;

    @Prop()
    nombre: string;

    @Prop()
    marca: string;

    @Prop()
    Pactivo: string;

    @Prop()
    Enfermedad: string;

    @Prop()
    idImagen: string;

    @Prop({ default: productStatus.ON_DISPLAY })
    status: productStatus;
}

export const ProductSchema = SchemaFactory.createForClass(Product);