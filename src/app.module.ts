import { ProductModule } from './products/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose'


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ttom0202:<ttom0202>@cluster0.5rn2u.mongodb.net/<Burguer>?retryWrites=true&w=majority'),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
