import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { GoogleBooksApiInterface } from '../models/book-api.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private api_path = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  findAllBook(title: string): Observable<Book[]> {
    return this.http
      .get<GoogleBooksApiInterface>(`${this.api_path}?q=${title}&maxResults=40`)
      .pipe(map((data: GoogleBooksApiInterface) => data.items));
  }

  getBookById(id: string): Observable<Book> {
    return this.http
      .get<Book>(`${this.api_path}/${id}`)
  }
}
