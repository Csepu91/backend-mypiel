import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductUsadoDto } from './dto/create-product-usado.dto';
import { UpdateProductUsadoDto } from './dto/update-product-usado.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProductUsado, ProducUsadoDocument } from './schemas/productUsado.schema';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/product/schemas/product.schema';

@Injectable()
export class ProductUsadoService {
  constructor(
    @InjectModel(ProductUsado.name) private productUsadoModel: Model<ProducUsadoDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>

  ) { }

  async create(createProductUsadoDto: CreateProductUsadoDto): Promise<ProductUsado> {
    const createProductUsado = new this.productUsadoModel(createProductUsadoDto);
    return createProductUsado.save();
  }

  async findAll() {
    return await this.productUsadoModel.find().exec();
  }

  async findOne(id: string) {
    const productUsadoFound = await this.productUsadoModel.findById(id).exec();

    if (!productUsadoFound) {
      throw new NotFoundException(`Producto en uso con id: ${id} no encontrado`);
    }

    return productUsadoFound
  }

  /*   update(id: number, updateProductUsadoDto: UpdateProductUsadoDto) {
      return `This action updates a #${id} productUsado`;
    } */

  async remove(id: string) {
    const productUsadoDeleted = await this.productUsadoModel.findByIdAndDelete(id).exec();

    if (!productUsadoDeleted) {
      throw new NotFoundException(`Producto en uso con id: ${id} no encontrado`);
    }

    console.log(`Producto eliminado: ${JSON.stringify(productUsadoDeleted)}`);

    return productUsadoDeleted;
  }
}
