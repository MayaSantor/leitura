import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule,
    CommonModule,
    Header,
    Footer
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {
  tituloLivro: string = '';
  dataInicio: string = '';
  dataFim: string = '';
  resenhaLivro: string = '';
  avaliacao: number = 0;

  cadastrarLivro() {
    console.log('Livro cadastrado:', this.tituloLivro);
    console.log('Nota:', this.avaliacao);
    this.tituloLivro = '';
    this.dataInicio = '';
    this.dataFim = '';
    this.resenhaLivro = '';
    this.avaliacao = 0;
  }

  avaliar (nota: number) {
    this.avaliacao = nota;
  }

  getClasseEstrela(estrela: number): string {
  return this.avaliacao >= estrela ? 'fas selected' : 'far';
}
}