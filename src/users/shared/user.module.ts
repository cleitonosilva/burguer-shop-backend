import { UserController } from '../user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';


import { DatabaseModule } from '../../database/database.module';
import { userProviders } from './user.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
        UserService, 
    ...userProviders,
    UserService,
  ],
})
export class UserModule {}