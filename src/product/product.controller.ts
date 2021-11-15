import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll() {
    console.log('hello from the product controller');
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.getOne(+id);
  }

  @Post()
  create(@Body() createProduct: Partial<Product>) {
    return this.productService.create(createProduct.name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProduct: Partial<Product>) {
    return this.productService.update(+id, updateProduct.name);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
      this.productService.delete(+id);
      res.status(HttpStatus.NO_CONTENT).json({});
  }
}
