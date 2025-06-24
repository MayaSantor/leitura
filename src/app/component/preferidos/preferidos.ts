import { Component, Input, OnInit } from '@angular/core';
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
  @Input() livros: Livro[] = []
  currentIndex = 0;
  cardsPerPage = 4;

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
     this.definirCardsPorPagina(); // já define ao carregar

  window.addEventListener('resize', () => {
    this.definirCardsPorPagina();
  });

  this.livroService.getLivros().subscribe({
    next: (dados: Livro[]) => {
      this.livros = dados;
      this.definirCardsPorPagina(); // define de novo com os dados
    },
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

  definirCardsPorPagina() {
  const largura = window.innerWidth;

  if (largura < 600) {
    this.cardsPerPage = 1;
  } else if (largura < 900) {
    this.cardsPerPage = 2;
  } else if (largura < 1200) {
    this.cardsPerPage = 3;
  } else {
    this.cardsPerPage = 4;
  }

  // Garante que o índice não ultrapasse o limite
  if (this.currentIndex + this.cardsPerPage > this.livros.length) {
    this.currentIndex = Math.max(0, this.livros.length - this.cardsPerPage);
  }
}

}