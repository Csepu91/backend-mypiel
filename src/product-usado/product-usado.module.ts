import { Module } from '@nestjs/common';
import { ProductUsadoService } from './product-usado.service';
import { ProductUsadoController } from './product-usado.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from 'src/product/product.module';
import { ProductUsado, ProductUsadoSchema } from './schemas/productUsado.schema';
import { Product, ProductSchema } from 'src/product/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProductUsado.name, schema: ProductUsadoSchema },
    { name: Product.name, schema: ProductSchema }
    ]),
    ProductModule,
  ],
  controllers: [ProductUsadoController],
  providers: [ProductUsadoService],
  exports: [ProductUsadoService],
})
export class ProductUsadoModule { }
