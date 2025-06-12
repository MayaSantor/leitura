import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Inicio } from './component/inicio/inicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header, 
    Inicio
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'leitura';
}
