import { Component, OnInit } from '@angular/core';
import {AlertController, AlertInput} from '@ionic/angular';
import {Products} from "../../interfaces/interfaces";
import {PostsService} from "../../services/posts.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  products:Products[] = []
  nameParam: string = ''; //TODO: Retrieve the user name
  constructor(
    private alertController: AlertController,
    private postsService:PostsService,
    private userService:UsersService,
    private  router: Router
  ) {}

  ngOnInit() {
    this.nameParam =this.userService.getCurrentUser()?.companyName || 'CocaCola';
    console.log(this.nameParam)
    //Get the product by the name parameter
    this.postsService.getProductByName(this.nameParam).then((data)=>{
      this.products = data as Products[];
      console.log('Products:', this.products);
    });
  }




  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Create a new product',
      inputs: this.alertInputs,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log('Save clicked', data);
          }
        }
      ]
    });

    await alert.present();
  }

  public alertInputs:AlertInput[] = [
    {
      name: 'productName',
      type: 'text',
      placeholder: 'Product Name',
      attributes: {
        maxlength: 10,
      },
    },
    {
      name: 'productImage',
      type: 'url',
      placeholder: 'Product Image',
    },
    {
      name: 'price',
      type: 'number',
      placeholder: 'Price',
    },
  ];

  logout() {
    this.userService.clearCurrentUser();
    this.nameParam = '';
    // Navigate to the current route to force reload
    this.router.navigateByUrl('/profile', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/login']);
    });
  }
}
