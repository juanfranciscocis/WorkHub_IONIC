import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {Business, Products} from "../../interfaces/interfaces";

@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.page.html',
  styleUrls: ['./prod-description.page.scss'],
})
export class ProdDescriptionPage implements OnInit {


  nameParam: string = '';
  business: Business | undefined;
  products:Products[] = [];

  constructor(private route:ActivatedRoute, private service:PostsService) {

  }

  ngOnInit() {
    //Get the name parameter from the URL
    this.route.queryParams.subscribe(params => {
      this.nameParam = params['name'];
      console.log(this.nameParam);
    });
    console.log(this.nameParam);
    //Get the post by the name parameter
    this.service.getPostByCompanyName(this.nameParam).then((data)=>{
      this.business = data as Business;
      console.log(this.business);
    });
    //Get the product by the name parameter
    this.service.getProductByName(this.nameParam).then((data)=>{
      this.products = data as Products[];
      console.log('Products:', this.products);
    });
  }

  whatsapp(contact: number | undefined) {
    //Open the whatsapp app
    window.open('https://wa.me/' + contact, '_blank');
  }
}
