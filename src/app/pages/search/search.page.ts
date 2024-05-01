import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {business, search} from "ionicons/icons";
import {Business} from "../../interfaces/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  categories = ['Electronics', 'Clothing', 'Food','Tourism', 'Furniture', 'Books', 'Other'];
  choosedCategory: string = '';

  searchedBusiness: Business[] | undefined;

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {
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
      this.searchedBusiness = data;
    });
  }


  protected readonly business = business;

  goToCompany(companyName:string) {
    this.router.navigate(['/prod-description'], {queryParams: {name: companyName}});
  }
}
