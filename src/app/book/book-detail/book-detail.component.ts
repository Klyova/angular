import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import {ActivatedRoute} from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  get thumbnail(): string {
    return this.bookDetail.volumeInfo.imageLinks
      ? this.bookDetail.volumeInfo.imageLinks.smallThumbnail.replace("http:", "")
      : "";
  }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (!bookId) {
      return;
    }
    this.bookService.getBookById(bookId).subscribe({
      next: (response) => {
        this.bookDetail = response;
      }
    });
  }

}
