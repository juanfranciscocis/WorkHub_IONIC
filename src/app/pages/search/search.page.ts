import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {search} from "ionicons/icons";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  categories = ['Electronics', 'Clothing', 'Food','Tourism', 'Furniture', 'Books', 'Other'];
  choosedCategory: string = '';

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  category($event: any) {
    this.choosedCategory = $event.detail.value;
    this.search("");
  }

  search($event: any) {
    let search;

    if ($event !== ""){
      search = $event.detail.value;
    }else{
      search = "";
    }

    this.searchService.makeSearch(search, this.choosedCategory).then((data) => {
      console.log(data);
    });
  }




}
