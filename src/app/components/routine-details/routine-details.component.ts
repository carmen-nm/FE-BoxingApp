import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Routine } from 'src/app/interfaces/routine';
import { BoxingRoutineService } from 'src/app/services/boxing-routine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routine-details',
  templateUrl: './routine-details.component.html',
  styleUrls: ['./routine-details.component.css']
})
export class RoutineDetailsComponent implements OnInit{ 
    // variables
    routine!: any;
    constructor(private boxingRoutine: BoxingRoutineService, private activatedRoute: ActivatedRoute, private router: Router){
      
    }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params["id"];
      // this.getExercise(id);
      this.boxingRoutine.getRoutine(id).subscribe(
        {
          next:(data) =>{
            console.log(data);
            this.routine = data;
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

    deleteRoutine(): void{
      if(confirm("Do you want remove this exercise?")){

        const id = this.activatedRoute.snapshot.params["id"];
        this.boxingRoutine.deleteRoutine(id).subscribe(
          {
            next:(data) =>{
              this.goBack(); 
            },
            error:(error) =>{
              console.log(error)
              
            }
          }
        )
      }
    }
}
