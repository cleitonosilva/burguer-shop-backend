import { Module } from '@nestjs/common';

import { ProductsController } from '../products.controller';
import { ProductService } from './product.service';
import { DatabaseModule } from '../../database/database.module';
import { productsProviders } from './product.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    ...productsProviders,
    ProductService,
  ],
})
export class ProductModule {}