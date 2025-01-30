import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum productEstado {
    IN_USE = 'IN_USE',
    ON_DISPLAY = 'ON_DISPLAY',
}

@Schema({ timestamps: true })
export class ProductUsado {

    @Prop()
    idUserComun: string;

    @Prop()
    idProduct: string;

    @Prop()
    expirationDate: Date;

    @Prop({ default: productEstado.IN_USE })
    estado: productEstado;

}

export type ProducUsadoDocument = ProductUsado & Document;

export const ProductUsadoSchema = SchemaFactory.createForClass(ProductUsado);