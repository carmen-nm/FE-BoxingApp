import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Routine } from 'src/app/interfaces/routine';
import { BoxingRoutineService } from 'src/app/services/boxing-routine.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-routines-page',
  templateUrl: './routines-page.component.html',
  styleUrls: ['./routines-page.component.css']
})
export class RoutinesPageComponent implements OnInit{  

    // variables 
    routines: Routine[];

    constructor(private boxingRoutine:BoxingRoutineService){
      this.routines = this.boxingRoutine.routines;
    }

    ngOnInit(): void {
      this.getAllRoutines();
    }
  
  
    // request from component
    // void porq no es inmediato
    getAllRoutines(): void{
      this.boxingRoutine.getAllRoutines().subscribe(
        {
          next:(data) =>{
            console.log(data);
            this.routines = data;
          },
          error:(error) =>{
            console.log(error)
          }
        }
      )
    }

}
