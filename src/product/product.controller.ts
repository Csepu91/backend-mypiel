import {
    Controller,
    Post,
    Body,
    Put,
    Get,
    Delete,
    Param,
    UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/update-product.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    @ApiOperation({ summary: 'Aplicación del servicio de creación de productos' })
    async create(@Body() createProduct: CreateProductDto) {
        return this.productService.create(createProduct);
    }

    @Get()
    @ApiOperation({ summary: 'Ejecución del servicio que muestra todos los productos' })
    async findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Ejecución del servicio que muestra el producto identificado por id' })
    async findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Ejecución del servicio que modifica el producto identificado por id' })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async update(@Param('id') id: string, @Body() updateProduct: UpdateProduct) {
        return this.productService.update(id, updateProduct);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Ejecución del servicio que elimina el producto identificado por id' })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@Param('id') id: string) {
        console.log(`Ingreso al Delete del controlador con ID: ${id}`);
        return this.productService.delete(id);
    }
}




