import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {search} from "ionicons/icons";

@Component({
  selector: 'app-barfooter',
  templateUrl: './barfooter.component.html',
  styleUrls: ['./barfooter.component.scss'],
})
export class BarfooterComponent  implements OnInit {

  isCompany:boolean = false;
  inHome = false;
  inSearch = false;
  inProfile = false;


  constructor(
    private usersService:UsersService,
    private router: Router
              ) {
    //verify if im in the home page
    if (window.location.pathname === '/home') {
      this.inHome = true;
    }
    //verify if im in the search page
    if (window.location.pathname === '/search') {
      this.inSearch = true;
    }
    //verify if im in the profile page
    if (window.location.pathname === '/profile' || window.location.pathname === '/profile-personal') {
      this.inProfile = true;
    }


  }

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

  protected readonly search = search;
}
