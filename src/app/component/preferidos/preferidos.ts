import { Component, OnInit } from '@angular/core';
import { LivroCard } from '../livro-card/livro-card';
import { CommonModule } from '@angular/common';
import { Livro } from '../../models/livro.interface';
import { LivroService } from '../../services/livro';

@Component({
  selector: 'app-preferidos',
  imports: [LivroCard,
    CommonModule
  ],
  templateUrl: './preferidos.html',
  styleUrl: './preferidos.scss'
})
export class Preferidos implements OnInit {
  livros: Livro[] = [];
  currentIndex = 0;
  cardsPerPage = 4;

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getLivros().subscribe({
      next: (dados: Livro[]) => this.livros = dados,
      error: (err) => console.error('Erro ao buscar livros:', err)
    });
  }
   get livrosToShow() {
    return this.livros.slice(this.currentIndex, this.currentIndex + this.cardsPerPage);
  }

  next() {
    if (this.currentIndex + this.cardsPerPage < this.livros.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}