import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


export enum productEstado {
    IN_USE = 'IN_USE',
    ON_DISPLAY = 'ON_DISPLAY',
}


@Schema({ timestamps: true })
export class Product {

    @Prop()
    nombre: string;

    @Prop()
    marca: string;

    @Prop([String])
    pActivo: string[];

    @Prop([String])
    enfermedad: string[];

    @Prop()
    urlImagen: string;

    @Prop({ default: productEstado.ON_DISPLAY })
    estado: productEstado;
}

export const ProductSchema = SchemaFactory.createForClass(Product);