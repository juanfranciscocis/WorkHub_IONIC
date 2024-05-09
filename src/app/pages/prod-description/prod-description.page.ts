import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {Business, Products} from "../../interfaces/interfaces";
import {UsersService} from "../../services/users.service";
import {FavoritesService} from "../../services/favorites.service";

@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.page.html',
  styleUrls: ['./prod-description.page.scss'],
})
export class ProdDescriptionPage implements OnInit {


  nameParam: string = '';
  business: Business | undefined;
  products:Products[] = [];
  user = {
    companyName: 'user',
    email: '',
    password: '',
    isCompany: false,
  }

  constructor(
    private route:ActivatedRoute,
    private service:PostsService,
    private usersService: UsersService,
    private favoritesService: FavoritesService
    ) {

    this.user = this.usersService.getCurrentUser() as any;

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

  //create an alert to confirm the favorite
  async favoriteAlert(companyName: string) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Favorite';
    alert.message = 'Do you want to add this company to favorites?';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      },

      {
        text: 'Yes',
        handler: async () => {
          await this.favorite(companyName);
          await this.confirmationAlerFavorite(companyName);
        }
      }

    ];
    document.body.appendChild(alert);

    await alert.present();
  }

  //your company has been added to favorites
  async confirmationAlerFavorite(companyName:string){
    const alert = document.createElement('ion-alert');
    alert.header = 'Favorite';
    alert.message = `The company ${companyName} has been added to favorites`;
    alert.buttons = [
      {
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary'
      }
    ];
    document.body.appendChild(alert);

    await alert.present();
  }



  favorite(companyName: string){
    console.log("Favorite",companyName);
    console.log(this.user);
    this.favoritesService.addFavorite(this.user.companyName, companyName).then((data) => {
      console.log(data);
    });}


  doRefresh($event: any) {
    this.service.getPostByCompanyName(this.nameParam).then((data)=>{
      this.business = data as Business;
      console.log(this.business);
    });
    this.service.getProductByName(this.nameParam).then((data)=>{
      this.products = data as Products[];
      console.log('Products:', this.products);
      $event.target.complete();
    });

  }
}
