import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { BoxingUserService } from 'src/app/services/boxing-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
    // variables
    user!: any;
    constructor(private boxingUser:BoxingUserService, private activatedRoute: ActivatedRoute, private router: Router){
    }


    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params["id"];
      // this.getExercise(id);
      this.boxingUser.getUser(id).subscribe(
        {
          next:(data) =>{
            console.log(data);
            this.user = data;
          },
          error:(error) =>{
            console.log(error)
            this.goBack(); 
          }
        }
      )
    }



    goBack(): void {
      window.history.back();
      //this.router.navigate(["/exercises"]);
    }


    
    
}
