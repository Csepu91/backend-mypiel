import { Schema, Prop } from '@nestjs/mongoose';

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
    Pactivo: number;

    @Prop()
    Enfermedad: number;

    @Prop()
    idImagen: string;

    @Prop()
    status: productStatus;
}