import {Component, inject, OnInit} from '@angular/core';
import {AlertController, AlertInput} from '@ionic/angular';
import {Business, Products} from "../../interfaces/interfaces";
import {PostsService} from "../../services/posts.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {SearchService} from "../../services/search.service";
import {ImagesService} from "../../services/images.service";

import {Storage, ref, uploadBytesResumable, getDownloadURL} from '@angular/fire/storage';
import {business} from "ionicons/icons";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private readonly storage: Storage = inject(Storage);

  isImageLoaded: boolean = false;


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
    private searchService: SearchService,
    private imagesService:ImagesService
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




  onImageLoad() {
    this.isImageLoaded = true;
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
    this.router.navigateByUrl('/profile', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/login']);
    });
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


  async uploadFile(input: HTMLInputElement) {
    if (!input.files) return

    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, file.name);
        await uploadBytesResumable(storageRef, file).then((snapshot)=>{
          //get the url
          console.log('Uploaded a blob or file!', snapshot.ref.fullPath);
          this.downloadFile(snapshot.ref.fullPath).then(async (data) => {
            this.business.image = data;
            console.log(this.business.image);
            await this.publish();
          });
        });
      }


    }
  }

  async downloadFile(file: string):Promise<string> {
    let finalUrl = '';
    await getDownloadURL(ref(this.storage, file)).then((url) => {
      console.log('File available at', url);
      finalUrl = url;
    });
    return finalUrl;
  }





}
