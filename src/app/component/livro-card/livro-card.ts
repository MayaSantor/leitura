import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../../models/livro.interface';

@Component({
  selector: 'app-livro-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './livro-card.html',
  styleUrl: './livro-card.scss'
})
export class LivroCard {
  @Input() livro!: Livro;
}
