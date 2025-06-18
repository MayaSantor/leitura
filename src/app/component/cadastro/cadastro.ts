import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';
import { LivroService } from '../../services/livro';
import { Livro } from '../../models/livro.interface';


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
  nomeArquivo: string = '';
  dataInicio: string = '';
  dataFim: string = '';
  resenhaLivro: string = '';
  avaliacao: number = 0;
  // capaSelecionada: File | null = null;
  
 constructor(private livro: LivroService) {}

  cadastrarLivro() {
    // if (!this.capaSelecionada) {
    //   alert('Por favor, selecione uma imagem da capa.');
    //   return;
    // }

const livro: Livro = {
    tituloLivro: this.tituloLivro,
    dataInicio: this.dataInicio,
    dataFim: this.dataFim,
    resenhaLivro: this.resenhaLivro,
    avaliacao: this.avaliacao
  };

this.livro.cadastrarLivro(livro).subscribe({
    next: () => {
      alert('Livro cadastrado com sucesso!');
      this.resetarFormulario();
    },
    error: (err) => {
      console.error('Erro ao cadastrar livro:', err);
      alert('Erro ao cadastrar o livro.');
    }
  });
  }

  avaliar(nota: number) {
    this.avaliacao = nota;
  }

  getClasseEstrela(estrela: number): string {
    return this.avaliacao >= estrela ? 'fas selected' : 'far';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    // if (input.files && input.files.length > 0) {
    //   const arquivo = input.files[0];
    //   this.nomeArquivo = arquivo.name;
    //   this.capaSelecionada = arquivo;
    // } else {
    //   this.nomeArquivo = '';
    //   this.capaSelecionada = null;
    // }
  }

  resetarFormulario() {
    this.tituloLivro = '';
    this.nomeArquivo = '';
    this.dataInicio = '';
    this.dataFim = '';
    this.resenhaLivro = '';
    this.avaliacao = 0;
    // this.capaSelecionada = null;
  }
}