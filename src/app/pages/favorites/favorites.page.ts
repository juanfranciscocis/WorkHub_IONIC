import { Component, OnInit } from '@angular/core';
import {Business} from "../../interfaces/interfaces";
import {Router} from "@angular/router";
import {FavoritesService} from "../../services/favorites.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  items: Business[] | undefined;
  isLoadingBusiness: boolean = true;

  constructor(
    private service: FavoritesService,
    private usersService: UsersService,
    private router:Router
  ) {
    this.service.getFavorites(this.usersService.getCurrentUser()?.companyName || '').then((data) => {
      this.items = data;
      this.isLoadingBusiness = false;
    });
  }

  ngOnInit() {

  }

  onclickpage(name:string){
    this.router.navigate(['/prod-description'], {queryParams: {name: name}});
  }

  //create an alert to confirm the favorite
  async unFavoriteAlert(companyName: string) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Unfavorite';
    alert.message = 'Do you want to remove this company from favorites?';
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary'
      },

      {
        text: 'Yes',
        handler: async () => {
          await this.unFavorite(companyName);
          await this.confirmationAlertUnFavorite(companyName);
        }
      }

    ];
    document.body.appendChild(alert);

    await alert.present();
  }

  //your company has been added to favorites
  async confirmationAlertUnFavorite(companyName:string){
    const alert = document.createElement('ion-alert');
    alert.header = 'Favorite';
    alert.message = `The company ${companyName} has been removed from favorites`;
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

  unFavorite(companyName: string) {
    this.service.removeFavorite(this.usersService.getCurrentUser()?.companyName || '', companyName).then((data) => {
      this.doRefresh({target: {complete: () => {}}} as any);
    });
  }

  doRefresh($event: any) {
    this.service.getFavorites(this.usersService.getCurrentUser()?.companyName || '').then((data) => {
      this.items = data;
      this.isLoadingBusiness = false;
      $event.target.complete();
    });

  }
}
