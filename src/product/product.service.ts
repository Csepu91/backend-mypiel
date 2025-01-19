import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/create-product.dto';


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async create(product: CreateProductDto) {
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }

    async createMany(products: CreateProductDto[]) {
        const createdProducts = await this.productModel.insertMany(products);
        return createdProducts;
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


    /*     async findByName(nombre: string) {
            const productFound = await this.productModel.findOne({ nombre }).exec();
    
            if (!productFound) {
                throw new NotFoundException(`Producto con nombre: ${nombre} no encontrado`);
            }
    
            return productFound;
        }
    
    
        async findByPartialName(partialName: string) {
            if (partialName.length < 3) {
                throw new BadRequestException('El nombre parcial debe tener al menos 3 letras');
            }
    
            const productsFound = await this.productModel.find({ nombre: { $regex: partialName, $options: 'i' } }).exec();
    
            if (productsFound.length === 0) {
                throw new NotFoundException(`No se encontraron productos con el nombre parcial: ${partialName}`);
            }
    
            return productsFound;
        } */

    async findByText(text: string) {
        if (text.length < 3) {
            throw new BadRequestException('El texto debe tener al menos 3 caracteres');
        }

        const productsFound = await this.productModel.find({
            $or: [
                { nombre: { $regex: text, $options: 'i' } },
                { marca: { $regex: text, $options: 'i' } },
                { pActivo: { $regex: text, $options: 'i' } },
                { enfermedad: { $regex: text, $options: 'i' } }
            ]
        }).exec();

        if (productsFound.length === 0) {
            throw new NotFoundException(`No se encontraron productos con el texto: ${text}`);
        }

        return productsFound;
    }


    /*     async update(id: string, product: UpdateProductDto) {
            const updatedProduct = await this.productModel.findByIdAndUpdate(id, product, { new: true }).exec();
    
            if (!updatedProduct) {
                throw new NotFoundException(`Producto con id: ${id} no encontrado`);
            }
    
            return updatedProduct;
        } */


    async delete(id: string) {
        const productDeleted = await this.productModel.findByIdAndDelete(id).exec();

        if (!productDeleted) {
            throw new NotFoundException(`Producto con id: ${id} no encontrado`);
        }

        console.log(`Producto eliminado: ${JSON.stringify(productDeleted)}`);

        return productDeleted;
    }

}
