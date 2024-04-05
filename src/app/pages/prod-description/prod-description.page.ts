import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {Business} from "../../interfaces/interfaces";

@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.page.html',
  styleUrls: ['./prod-description.page.scss'],
})
export class ProdDescriptionPage implements OnInit {


  nameParam: string = '';
  item: Business | undefined;

  constructor(private route:ActivatedRoute, private service:PostsService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nameParam = params['name'];
      console.log(this.nameParam);
    });
    console.log(this.nameParam);
    this.service.getPostByCompanyName(this.nameParam).then((data)=>{
      this.item = data as Business;
      console.log(this.item);
    });
  }

}
