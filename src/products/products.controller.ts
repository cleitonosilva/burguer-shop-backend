import { Controller, Get, Param } from '@nestjs/common';
import { Product } from './shared/product';
import { ProductService } from './shared/product.service';

@Controller('products')
export class ProductsController {


    constructor(
    private productService: ProductService,
    ){ }

@Get()
async getAll() : Promise<Product[]>{
     return this.productService.getAll()
}

@Get(':id')
async getbyId(@Param('id') id : number) : Promise<Product>{
     return this.productService.getbyId(id);
}



}
