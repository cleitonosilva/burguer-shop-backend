import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @Column('text')
  senha: string;

  @Column('text')
  endereco: string;

  @Column('text')
  telefone: string;

  @Column('text')
  pontoReferencia: string;

  @Column('text')
  confirmarSenha: string;

  @Column('text')
  sobrenome: string;
  
  @Column('text')
  nome: string;
  
}