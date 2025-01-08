import {
    Controller,
    Post,
    Body,
    ValidationPipe,
    Put,
    Get,
    Delete,
    Param
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProduct } from './dtos/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    async create(@Body(new ValidationPipe()) createProduct: CreateProductDto) {
        return this.productService.create(createProduct);
    }

    //Servicio que encuentre trodos los registros de la colección
    @Get()
    async findAll() {
        return this.productService.findAll();
    }


    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body(new ValidationPipe()) updateProduct: UpdateProduct

    ) {
        return this.productService.update(id, updateProduct);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }


    // Servicio para la eliminación de un producto por su nombre
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.productService.delete(id);
    }

    /*     @Get(':nombre')
        async findAllByNombre(@Param('nombre') nombre: string) {
            return this.productService.findAllByNombre(nombre);
        }
    
    
        @Get(':marca')
        async findAllByMarca(@Param('marca') marca: string) {
            return this.productService.findAllByMarca(marca);
        }
    
    
        @Get(':enfermedad')
        async findAllByEnfermedad(@Param('enfermedad') enfermedad: string) {
            return this.productService.findAllByEnfermedad(enfermedad);
        }
    
        @Get(':pActivo')
        async findAllByPActivo(@Param('pActivo') pActivo: string) {
            return this.productService.findAllByPActivo(pActivo);
        }
    
        @Delete(':nombre')
        async deleteByNombreInUse(@Param('nombre') nombre: string) {
            return this.productService.deleteByNombreInUse(nombre);
        } */


}
