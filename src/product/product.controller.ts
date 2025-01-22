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
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    @ApiOperation({ summary: 'Ejecución del servicio de creación de productos' })
    async create(@Body() createProduct: CreateProductDto) {
        return this.productService.create(createProduct);
    }

    @Post('multiple')
    @ApiOperation({ summary: 'Ejecución del servicio de creación de múltiples productos' })
    async createMany(@Body() createProducts: CreateProductDto[]) {
        return this.productService.createMany(createProducts);
    }

    @Get('/all')
    @ApiOperation({ summary: 'Ejecución del servicio que muestra todos los productos' })
    async findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Ejecución del servicio que muestra el producto identificado por id' })
    async findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }

    /*     @Get('nombre/:nombre')
        @ApiOperation({ summary: 'Buscar un producto por nombre' })
        async findByName(@Param('nombre') nombre: string) {
            return this.productService.findByName(nombre);
        }
    
        @Get('buscar/:partialName')
        @ApiOperation({ summary: 'Buscar productos por una parte del nombre' })
        async findByPartialName(@Param('partialName') partialName: string) {
            return this.productService.findByPartialName(partialName);
        } */

    @Get('buscar/:text')
    @ApiOperation({ summary: 'Buscar productos por ingrediente activo o enfermedad' })
    async findByActiveIngredientOrDisease(@Param('text') text: string) {
        return this.productService.findByText(text);
    }


    /*     @Put(':id')
        @ApiOperation({ summary: 'Ejecución del servicio que modifica el producto identificado por id' })
        @UseGuards(JwtAuthGuard)
        @ApiBearerAuth()
        async update(@Param('id') id: string, @Body() updateProduct: UpdateProduct) {
            return this.productService.update(id, updateProduct);
        } */

    @Delete(':id')
    @ApiOperation({ summary: 'Ejecución del servicio que elimina el producto identificado por id' })
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@Param('id') id: string) {
        console.log(`Ingreso al Delete del controlador con ID: ${id}`);
        return this.productService.delete(id);
    }
}




