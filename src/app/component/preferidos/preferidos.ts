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

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getLivros().subscribe({
      next: (dados: Livro[]) => this.livros = dados,
      error: (err) => console.error('Erro ao buscar livros:', err)
    });
  }
}