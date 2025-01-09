import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/update-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    // Servicio de creación de productos
    async create(product: CreateProductDto) {
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }

    // Servicio que encuentre todos los productos
    async findAll() {
        return this.productModel.find().exec();
    }

    // Servicio que encuentre un producto por su id
    async findOne(id: string) {
        const productFound = await this.productModel.findById(id).exec();

        if (!productFound) {
            throw new NotFoundException(`Producto con id: ${id} no encontrado`);
        }

        return productFound
    }

    // Servicio que seleccione un producto y actulice
    async update(id: string, product: UpdateProduct) {
        const updatedProduct = await this.productModel.findByIdAndUpdate(id, product, { new: true }).exec();

        if (!updatedProduct) {
            throw new NotFoundException(`Producto con id: ${id} no encontrado`);
        }

        return updatedProduct;
    }

    // Servicio para la eliminación de un producto por su nombre
    async delete(id: string) {
        const productDeleted = await this.productModel.findByIdAndDelete(id).exec();

        if (!productDeleted) {
            throw new NotFoundException(`Producto con id: ${id} no encontrado`);
        }

        console.log(`Producto eliminado: ${JSON.stringify(productDeleted)}`);
        return productDeleted;
    }

    /*     // Servicio que permite encontrar todos los productos coincidentes con el nombre indicado
        async findAllByNombre(nombre: string) {
            return this.productModel.find({ nombre }).exec();
        }
    
        // Servicio que permite encontrar todos los productos coincidentes con la marca indicada
        async findAllByMarca(marca: string) {
            return this.productModel.find({ marca }).exec();
        }
    
        // Servicio que permite encontrar todos los productos coincidentes con la enfermedad indicada
        async findAllByEnfermedad(enfermedad: string) {
            return this.productModel.find({ enfermedad }).exec();
        }
    
        // Servicio que permite encontrar todos los productos coincidentes con el pActivo indicado
        async findAllByPActivo(pActivo: string) {
            return this.productModel.find({ pActivo }).exec();
        } */



    /*     //Servicio que permite encontrar todos los productos en estado IN_USE
        async findAllInUse() {
            return this.productModel.find({ estado: 'IN_USE' }).exec();
        } */

}
