import { Component, Input } from '@angular/core';
import { Livro } from '../../models/livro.interface';

@Component({
  selector: 'app-compilado',
  imports: [],
  templateUrl: './compilado.html',
  styleUrl: './compilado.scss'
})
export class Compilado {
  @Input() livros: Livro[] = [];
}
