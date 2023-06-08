import { Component , OnInit} from '@angular/core';
import { Routine } from 'src/app/interfaces/routine';
import {Input} from '@angular/core'
import { BoxingUserService } from 'src/app/services/boxing-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-routine-to-choose',
  templateUrl: './routine-to-choose.component.html',
  styleUrls: ['./routine-to-choose.component.css']
})
export class RoutineToChooseComponent implements OnInit{
     // variables
     @Input() 
     routine!: Routine;

     user!: User;


     constructor(private boxingUser:BoxingUserService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    getUser(): void{
      let userId = this.activatedRoute.snapshot.params["id"];   
      this.boxingUser.getUser(userId).subscribe({
        next: (data) => {
          this.user = data;
        }
      });
    }

    ngOnInit(): void {     
      this.getUser();
    }
    
    routineInUser(routineId: any): Boolean{
      let exist = false;
    
      const routineFound = this.user.routines.find(element => element.id == routineId);      
    
      return (routineFound !== undefined);
    }

    addRoutine(routineId: any):void{             
      if(confirm("Do you want to add this routine?")){     
      const userId = this.activatedRoute.snapshot.params["id"];      
      this.boxingUser.addUserRoutines(userId, routineId).subscribe(
        {
          next:(data) =>{
            // Actualizar listado
            console.log("Update routines list");
            this.router.navigate([`/users/${userId}`]);

          },
          error:(error) =>{
            console.log(error)
            
          }
        }
      )
      }
    }

    deleteRoutine(routineId: any):void{
      if(confirm("Do you want remove this routine?")){
        const userId = this.activatedRoute.snapshot.params["id"];      
        this.boxingUser.deleteUserRoutines(userId, routineId).subscribe(
          {
            next:(data) =>{
              // Actualizar listado
              console.log("Update routines list");
              this.router.navigate([`/users/${userId}`]);
  
            },
            error:(error) =>{
              console.log(error)
              
            }
          }
        )
        }
    }
}
