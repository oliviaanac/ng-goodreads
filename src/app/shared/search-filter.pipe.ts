import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../shared/book.model';

@Pipe({
  name: "searchFilter"
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: Book[], searchTerm: string): Book[] {
    if (!value)
    return []; //empty

    if (!searchTerm)
    return value; //all values

    return value.filter(elem => {
      return elem.originalTitle.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }
}


