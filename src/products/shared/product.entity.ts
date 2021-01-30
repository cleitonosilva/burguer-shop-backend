import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  grif: string;

  @Column('text')
  categoria: string;

  @Column('text')
  produto: string;

  @Column('text')
  descricao: string;

  @Column('text')
  url: string;

  @Column('int')
  preco: number;

}