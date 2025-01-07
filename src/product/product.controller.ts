import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    async create(@Body(new ValidationPipe()) createProduct: CreateProductDto) {
        return this.productService.create(createProduct);
    }
}
