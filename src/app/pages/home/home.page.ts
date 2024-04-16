import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Router} from "@angular/router";
import {Business} from "../../interfaces/interfaces";



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Business[] | undefined;
  isLoadingBusiness: boolean = true;

  constructor(private service: PostsService, private router: Router) {
    this.service.getAllPosts().then((data) => {
      this.items = data as Business[];
      this.isLoadingBusiness = false;
    });

  }

  ngOnInit() {
  }

  onclickpage(name:string){
    this.router.navigate(['/prod-description'], {queryParams: {name: name}});

  }
}
