import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/update-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async create(product: CreateProductDto) {
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }

    async findAll() {
        return this.productModel.find().exec();
    }

    async findOne(id: string) {
        const productFound = await this.productModel.findById(id).exec();

        if (!productFound) {
            throw new NotFoundException(`Producto con id: ${id} no encontrado`);
        }

        return productFound
    }


    async update(id: string, product: UpdateProduct) {
        const updatedProduct = await this.productModel.findByIdAndUpdate(id, product, { new: true }).exec();

        if (!updatedProduct) {
            throw new NotFoundException(`Producto con id: ${id} no encontrado`);
        }

        return updatedProduct;
    }


    async delete(id: string) {
        const productDeleted = await this.productModel.findByIdAndDelete(id).exec();

        if (!productDeleted) {
            throw new NotFoundException(`Producto con id: ${id} no encontrado`);
        }

        console.log(`Producto eliminado: ${JSON.stringify(productDeleted)}`);

        return productDeleted;
    }

}
