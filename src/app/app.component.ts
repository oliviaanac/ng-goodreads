import { Component, OnInit } from '@angular/core';
import {BookService} from "./services/book.service";
import {Book} from "./shared/book.model";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'ng-goodreads';
  searchTitle: string = '';
  gplonfire: boolean = false;
  books: Book[] = [];


  // onChange(textValue) {
  //   console.log(textValue);
  // }

  // onClick(searchTerm) {
  //   this.searchTerm = searchTerm;
  //   this.gplonfire = !this.gplonfire;
  // }

  constructor(private bookService: BookService) {}

    ngOnInit(){
      this.bookService
      .fetchBooks()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
    }

  doSearch(event: {searchTerm: string}): void{
    this.searchTitle = event.searchTerm;
  }

  delBook(event: {id: string}): void{
    this.searchTitle = event.id;
}

}

