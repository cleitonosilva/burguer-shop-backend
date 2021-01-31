import { ProductModule } from './products/shared/product.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/shared/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
