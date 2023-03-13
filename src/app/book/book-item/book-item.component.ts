import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() bookInfo!: Book;

  public openBookDetailPage(): void {
    if (this.bookInfo.id) {
      const url = location.origin + `/catalog/${this.bookInfo.id}`;
      window.location.href= url;
    }
  }

  get thumbnail(): string {
    return this.bookInfo.volumeInfo.imageLinks
      ? this.bookInfo.volumeInfo.imageLinks.smallThumbnail.replace("http:", "")
      : "";
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
