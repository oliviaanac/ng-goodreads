import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Search} from '../shared/search.model';
//import {Delete} from '../shared/search.model';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})


export class SearchBoxComponent implements OnInit {
  title: string = "Search";
  searchTerm: string = "";
  @Output() searchFired = new EventEmitter<Search>();
  //@Output() searchList = new EventEmitter<Delete>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(textValue) {
     this.searchTerm = textValue;
  }

  onSearch() {
     this.searchFired.emit({searchTerm: this.searchTerm});
     //this.searchList.emit({searchTerm: this.searchList});
  }
}



