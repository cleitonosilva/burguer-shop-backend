import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './shared/user';
import { UserService } from './shared/user.service';

@Controller('User')
export class UserController {

    constructor(
    private productService: UserService,
    ){ }

@Get('listarUser')
async listar() : Promise<User[]>{
     return this.productService.listar()
};

@Post('cadastrarUser')
async cadastrar(@Body() data : User): Promise<User>{
    return this.productService.cadastrar(data)
    };

// @Get(':id')
// async getbyId(@Param('id') id : number) : Promise<Product>{
//      return this.productService.getbyId(id);
// };

// @Get(':categoria')
// async getbyCategoria(@Param('categoria') categoria : string) : Promise<Product>{
//      return this.productService.getbyCategoria(categoria);
// };

// @Post()
// async create(@Body() product : Product): Promise<Product>{
//     return this.productService.create(product);
// };

// @Put(':id')
// async update(@Param('id') id : number, @Body() product : Product) : Promise<Product> {
// product.id = id;
// return this.productService.update(product);
// };

// @Delete(':id')
// async delete(@Param('id') id : number){
//     this.productService.delete(id);
// };

}
 