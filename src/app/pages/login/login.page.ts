import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Login} from "../../interfaces/interfaces";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Login = {
    companyName: '',
    password: ''
  };

  constructor(
    private userService:UsersService,
    private router: Router,
    public alertController:AlertController,
  ) { }

  ngOnInit() {
  }

  async loginUser() {

    // Check if all required fields are filled
    if (!this.user.companyName || !this.user.password) {
      await this.presentAlert('Error', 'Please fill all required fields');
      return false; // Prevent registration if data is incomplete
    }

    this.userService.loginUser(this.user).then((data) => {
      //redirect to home page with the user logged in
      if (data) {
        this.router.navigate(['/home']);
        return true;
      }
      this.presentAlert('Error', 'User does not exist or password is incorrect');
      return false;

    });

    return false;
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
