import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Compilado } from '../compilado/compilado';
import { Footer } from '../footer/footer';
import { Inicio } from '../inicio/inicio';
import { Preferidos } from '../preferidos/preferidos';

@Component({
  selector: 'app-home',
  imports: [Header, 
    Inicio,
    Preferidos,
    Compilado,
    Footer,],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
