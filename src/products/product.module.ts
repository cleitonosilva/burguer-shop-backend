import { ProductService } from './shared/product.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';

@Module({
    imports: [ProductsController],
    controllers: [],
    providers: [ProductService],
})
export class ProductModule {}
