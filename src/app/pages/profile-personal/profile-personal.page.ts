import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/interfaces";

@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.page.html',
  styleUrls: ['./profile-personal.page.scss'],
})
export class ProfilePersonalPage implements OnInit {


  user:User = {
    companyName: '',
    email: '',
    password: '',
    isCompany: false,
  }

  constructor(private usersService:UsersService) {
    this.user = this.usersService.getCurrentUser() as User;
  }

  ngOnInit() {
  }

  saveChanges() {

    console.log(this.user);
    this.usersService.updateUser(this.user).then(r => {
      location.reload();
    });
  }
}
