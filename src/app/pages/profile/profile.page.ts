import { Component, OnInit } from '@angular/core';
import {AlertController, AlertInput} from '@ionic/angular';
import {Business, Products} from "../../interfaces/interfaces";
import {PostsService} from "../../services/posts.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {bus, business} from "ionicons/icons";
import {publish} from "rxjs";
import {SearchService} from "../../services/search.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  categories = ['Electronics', 'Clothing', 'Food','Tourism', 'Furniture', 'Books', 'Other'];


  products:Products[] = []
  business: Business = {
    companyName: '',
    price: 0,
    description: '',
    image: 'https://ionicframework.com/docs/img/demos/card-media.png',
    contact: 0,
  };
  nameParam: string = ''; //User from local storage
  isLoadingBusiness: boolean = true;
  isLoadingProducts: boolean = true;


  constructor(
    private alertController: AlertController,
    private postsService:PostsService,
    private userService:UsersService,
    private router: Router,
    private searchService: SearchService
  ) {



  }

  async ngOnInit() {
    this.nameParam = this.userService.getCurrentUser()?.companyName || '';
    console.log(this.nameParam)


    //Get the post by the name parameter
    this.postsService.getPostByCompanyName(this.nameParam).then((data) => {
      this.business = data as Business;
      console.log(this.business);
      this.isLoadingBusiness = false;
    });


    //Get the product by the name parameter
    this.postsService.getProductByName(this.nameParam).then((data) => {
      this.products = data as Products[];
      console.log('Products:', this.products);
      this.isLoadingProducts = false;
    });


    this.searchService.getCategories(this.userService.getCurrentUser()?.companyName || '').then((data) => {
      console.log(data)
      data.forEach((value) => {
        let category = document.getElementById(value);
        if (category) {
          category.style.backgroundColor = 'green';
        }
      });
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
          handler: async (data) => {
            await this.postsService.createProduct(data, this.business).then((data) => {
              location.reload();
            });
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
  }

  public publish(){
    this.postsService.updatePost(this.business).then((data) => {
      location.reload();
    });
  }

  addCategory(cat: string) {
    this.searchService.addCategory(cat,this.business.companyName).then((data) => {

      if (!data){
        location.reload();
      }

      //Change color of the category
      let category = document.getElementById(cat);
      if (category?.style.backgroundColor === 'green') {
        category.style.backgroundColor = 'ion-color-primary';
      } else {
        category!.style.backgroundColor = 'green';
      }
    });
  }
}
