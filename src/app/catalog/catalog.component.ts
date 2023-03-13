import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import {BookService} from '../services/book.service';
import {Observable} from 'rxjs';
import { RoutingModule } from '../routing/routing.module';

@Component({
  selector: 'app-about',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  books!: Observable<Book[]>;

  constructor(private bookService: BookService, private route: RoutingModule) { }

  ngOnInit(): void {
    this.initialBooks();
  }

  initialBooks() {
    this.books = this.bookService.findAllBook('Україна')
  }
}
