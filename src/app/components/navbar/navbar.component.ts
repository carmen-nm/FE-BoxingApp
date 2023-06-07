import { Component } from '@angular/core';
import { BoxingUserService } from 'src/app/services/boxing-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  boxingUserService: BoxingUserService;

  constructor(private boxingUser: BoxingUserService){
    this.boxingUserService = boxingUser;
  }

  logout():void {
    localStorage.removeItem("userId");
  }
}
