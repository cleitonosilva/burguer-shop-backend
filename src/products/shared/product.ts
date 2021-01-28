import { Document } from 'mongoose';

export class Product extends Document {
    grif: string;
    categoria: string;
    produto: string;
    descricao: string;
    preco: number;
    url: string;
      
}
