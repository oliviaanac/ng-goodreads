import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import {Book} from "../shared/book.model";
import {throwError} from "rxjs";



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.log(`an error occured: ${error.error.message}`);
      }else{
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(
        'Opps smth went wrong'
      )
    }

  fetchBooks() {
    return this.http.get<Book[]>('/books', httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
}
