
import { Injectable, Inject } from '@nestjs/common';
import { error } from 'console';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private productRepository: Repository<User>,
  ) {}

  async listar(): Promise<User[]> {
    return this.productRepository.find();
  }

  async cadastrar(data: User): Promise<any> {
    let user = new User();
    
    user.email = data.email;
    user.senha = data.senha;

    this.productRepository.save(user)
    .then((result) => {
      return result.email
      
    })
    .catch((error) => {
      return error.message 
    })
    
    
  };
} 