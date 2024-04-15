import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-barfooter',
  templateUrl: './barfooter.component.html',
  styleUrls: ['./barfooter.component.scss'],
})
export class BarfooterComponent  implements OnInit {

  isCompany:boolean = false;


  constructor(
    private usersService:UsersService,
    private router: Router
              ) { }

  ngOnInit() {
    this.isCompany = this.usersService.getCurrentUser()?.isCompany || false;
  }

  companyOrPerson() {
    if (this.isCompany) {
        this.router.navigate(['/profile']);
    }else {
        this.router.navigate(['/profile-personal']);
    }
  }
}
