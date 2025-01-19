import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductUsadoService } from './product-usado.service';
import { CreateProductUsadoDto } from './dto/create-product-usado.dto';
import { UpdateProductUsadoDto } from './dto/update-product-usado.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('product-usado')
export class ProductUsadoController {
  constructor(private readonly productUsadoService: ProductUsadoService) { }

  @Post()
  @ApiOperation({ summary: 'Aplicación del servicio de creación de Producto usado' })
  async create(@Body() createProductUsadoDto: CreateProductUsadoDto) {
    return await this.productUsadoService.create(createProductUsadoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Ejecución del servicio que muestra todos los Productos usados' })
  async findAll() {
    return await this.productUsadoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ejecución del servicio que muestra el producto usado identificado por id' })
  async findOne(@Param('id') id: string) {
    return this.productUsadoService.findOne(id);
  }

  /*   @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductUsadoDto: UpdateProductUsadoDto) {
      return this.productUsadoService.update(+id, updateProductUsadoDto);
    } */

  @Delete(':id')
  @ApiOperation({ summary: 'Ejecución del servicio que elimina el producto en uso identificado por id' })
  remove(@Param('id') id: string) {
    return this.productUsadoService.remove(id);
  }
}
