import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    // Servicio de creación de productos
    async create(product: any) {
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }
}
