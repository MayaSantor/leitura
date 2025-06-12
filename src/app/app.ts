import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Inicio } from './component/inicio/inicio';
import { Preferidos } from './component/preferidos/preferidos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header, 
    Inicio,
    Preferidos
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'leitura';
}
