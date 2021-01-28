import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    grif: String,
    categoria: String,
    produto: String,
    descricao: String,
    preco: Number,
    url: String,
    
})