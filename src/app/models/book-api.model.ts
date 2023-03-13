import { Book } from './book.model';

export interface GoogleBooksApiInterface {
  kind: string;
  totalItems: number;
  items: Book[];
}
