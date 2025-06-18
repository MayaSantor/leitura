import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro.interface';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
   private apiUrl = 'http://localhost:8080/api/books'; 

  constructor(private http: HttpClient) { }

  cadastrarLivro(livro: Livro): Observable<any> {
    return this.http.post(this.apiUrl, livro);
}
  getLivros(): Observable<Livro[]> {
  return this.http.get<Livro[]>(this.apiUrl);
}
}
