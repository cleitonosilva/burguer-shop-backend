import { Injectable } from '@nestjs/common';
import { Product } from './product';

@Injectable()
export class ProductService {

    products: Product[] = [
        {
          grif: 'La Vosier',
          categoria: 'Promoções',
          produto: 'Hamburguer',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/burguerproduct.png',
          id: 1
        },
        {
          grif: 'La Vosier',
          categoria: 'Promoções',
          produto: 'Cubanaca',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/cubanaca.png',
          id: 2
        },
        {
          grif: 'Casa da Batata',
          categoria: 'Promoções',
          produto: 'Super Kit',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 26,
          url: '../../../assets/img/superkit2.png',
          id: 3
        },
        {
          grif: 'Lanches artesanais',
          categoria: 'Promoções',
          produto: 'In Nature',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 29,
          url: '../../../assets/img/innature.png',
          id: 4
        },
        {
         grif: 'Pão de queijo',
          categoria: 'Promoções',
          produto: 'Expressinho pra viagem',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/expressinho.png',
          id: 5
        },
        {
          grif: 'Body Fitness',
          categoria: 'Promoções',
          produto: 'Suco de melancia',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/melancia.png',
          id: 6
        },
        {
          grif: 'La Vosier',
          categoria: 'Bebidas',
          produto: 'Cubanaca',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/cubanaca.png',
          id: 7
        },
        {
          grif: 'Carolina Herrera',
          categoria: 'Bebidas',
          produto: 'Amanhecer',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/carolina.png',
          id: 8
        },
        {
          grif: 'Casa do cafe',
          categoria: 'Bebidas',
          produto: 'Cafe com amor',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/casacafe.png',
          id: 9
        },
        {
          grif: 'Doces Supremos',
          categoria: 'Bebidas',
          produto: 'Milk shake',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 25,
          url: '../../../assets/img/milkshake.png',
          id: 10
        },
        {
          grif: 'Body Fitness',
          categoria: 'Bebidas',
          produto: 'Suco de melancia',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/melancia.png',
          id: 11
        },
        {
          grif: 'Body Fitness',
          categoria: 'Bebidas',
          produto: 'Agua com gas',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/agua.png',
          id: 12
        },
        {
          grif: 'La Vosier',
          categoria: 'Lanches',
          produto: 'Cubanaca',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 16,
          url: '../../../assets/img/lanchecuba.png',
          id: 13
        },
        {
          grif: 'Casa da Batata',
          categoria: 'Lanches',
          produto: 'Super Kit',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 26,
          url: '../../../assets/img/superkit.png',
          id: 14
        },
        {
          grif: 'Via Expresso',
          categoria: 'Lanches',
          produto: 'Millenium',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 46,
          url: '../../../assets/img/milenium.png',
          id: 15
        },
        {
          grif: 'Lanches artesanais',
          categoria: 'Lanches',
          produto: 'In Nature',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 29,
          url: '../../../assets/img/innature.png',
          id: 16
        },
        {
          grif: 'Cubanacan',
          categoria: 'Lanches',
          produto: 'Natchos',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 26,
          url: '../../../assets/img/natchos.png',
          id: 17
        },
        {
          grif: 'Mama mia',
          categoria: 'Lanches',
          produto: 'Quarteirão',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 46,
          url: '../../../assets/img/quarteirao.png',
          id: 18
        },
        {
          grif: 'Latinos Lanches',
          categoria: 'Lanches',
          produto: 'Presuntinhos',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 16,
          url: '../../../assets/img/presuntinhos.png',
          id: 19
        },
        {
          grif: 'Casa da Batata',
          categoria: 'Lanches',
          produto: 'Super Kit',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 26,
          url: '../../../assets/img/superkit2.png',
          id: 20
        },
        {
          grif: 'Via expresso',
          categoria: 'Lanches',
          produto: 'Millenium',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 26,
          url: '../../../assets/img/milenium2.png',
          id: 21
        },
        {
          grif: 'Siga bem caminhoneiro',
          categoria: 'Lanches',
          produto: 'Enguiça Blindado ',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 26,
          url: '../../../assets/img/enguica.png',
          id: 22
        },
        {
          grif: 'Vida Saudavel',
          categoria: 'Lanches',
          produto: 'Pãozinho a Paulista',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 14,
          url: '../../../assets/img/paulista.png',
          id: 23
        },
        {
          grif: 'Pão de queijo',
          categoria: 'Lanches',
          produto: 'Expressinho pra viagem',
          descricao: 'Delicia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          preco: 20,
          url: '../../../assets/img/expressinho.png',
          id: 24
        }
      ]
    
getAll(){
 return this.products;

};

getbyId(id: number){
const product = this.products.find(x => x.id == id);
return product;

};

getbyCategoria(categoria: string){
    const product = this.products.find(x => x.categoria == categoria);
    return product;
    
    };

create(product: Product){
 let ultimoId = 0;
 if (this.products.length > 0){
     ultimoId = this.products[this.products.length - 1].id;
 };
 product.id = ultimoId + 1;
 this.products.push(product);
 return product; 

};

update(product: Product){
    const productArray = this.getbyId(product.id);
    if (productArray){
        productArray.categoria = product.categoria, 
        productArray.descricao = product.descricao, 
        productArray.grif = product.grif, 
        productArray.preco = product.preco, 
        productArray.produto = product.produto,  
        productArray.url = product.url
    };
    return product;

};

delete(id: number){
    const index = this.products.findIndex(p => p.id == id);
    this.products.splice(index, 1)

};

}
