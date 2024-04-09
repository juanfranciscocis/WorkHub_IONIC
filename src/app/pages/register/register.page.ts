import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/interfaces";
import {UsersService} from "../../services/users.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string = '';
  password:string = '';
  email:string = '';
  isCompany:boolean = false;


  user:User | undefined;


  constructor(private usersService:UsersService,
              public alertController:AlertController,
              private router:Router){ }

  ngOnInit() {
  }

  async register(): Promise<boolean> {

    // Check if all required fields are filled
    if (!this.username || !this.password || !this.email) {
      await this.presentAlert('Error', 'Please fill all required fields');
      return false; // Prevent registration if data is incomplete
    }

    this.user = {
      companyName: this.username,
      email: this.email,
      password: this.password,
      isCompany: this.isCompany
    }

    let createUser: boolean = await this.usersService.createUser(this.user);

    if (!createUser){
      await this.presentAlert('Error', 'User already exists');
    }else {
      //redirect to home page with the user logged in
      this.router.navigate(['/home'], {state: {user: this.user}}); //TODO: Check if this is the correct way to pass the user to the next page
    }
    return createUser;
  }


  async presentAlert(message:string, description:string) {
    const alert = await this.alertController.create({
      header: message,
      message: description,
      buttons: ['OK']
    });
    await alert.present();
  }

}
