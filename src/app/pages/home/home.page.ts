import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Router} from "@angular/router";
import {Business, User} from "../../interfaces/interfaces";
import {FavoritesService} from "../../services/favorites.service";
import {UsersService} from "../../services/users.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Business[] | undefined;
  isLoadingBusiness: boolean = true;
  user:User = {
    companyName: '',
    email: '',
    password: '',
    isCompany: false,
  }

  constructor(
    private service: PostsService,
    private favoritesService:FavoritesService,
    private usersService: UsersService,
    private router: Router)
  {
    this.service.getAllPosts().then((data) => {
      this.items = data as Business[];
      this.isLoadingBusiness = false;
      this.user = this.usersService.getCurrentUser() as User;
    });

  }

  ngOnInit() {
  }

  onclickpage(name:string){
    this.router.navigate(['/prod-description'], {queryParams: {name: name}});

  }


  isCompany:boolean = false;
  companyOrPerson() {
    if (this.isCompany) {
      this.router.navigate(['/profile']);
    }else {
      this.router.navigate(['/profile-personal']);
    }
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
    });
  }


  doRefresh($event: any) {
    this.service.getAllPosts().then((data) => {
      this.items = data as Business[];
      $event.target.complete();
    });
  }
}
