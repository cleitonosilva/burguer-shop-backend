import { Injectable } from '@nestjs/common';
import { Product } from './product';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'


@Injectable()
export class ProductService {

 constructor(@InjectModel('Product') private readonly productModel : Model<Product>){

 }   

 async getAll(){
 return await this.productModel.find().exec();

};

  async getbyId(id: String){
  return await this.productModel.find(id).exec();
};

  async getbyCategoria(categoria: String){
  return await this.productModel.find(categoria).exec();
    
};

async create(product: Product){
 const productCreate = new this.productModel(product);
 return await productCreate.save();

};

async update(id : string, product: Product){
    await this.productModel.updateOne({_id : id}, product).exec();
    return this.getbyId(id);
};

async delete(id: String){
    return await this.productModel.deleteOne({_id : id}).exec();
};

}
