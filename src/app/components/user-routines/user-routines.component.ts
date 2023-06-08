import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Routine } from 'src/app/interfaces/routine';
import { BoxingRoutineService } from 'src/app/services/boxing-routine.service';

@Component({
  selector: 'app-user-routines',
  templateUrl: './user-routines.component.html',
  styleUrls: ['./user-routines.component.css']
})
export class UserRoutinesComponent implements OnInit{
    // variables
    routines!: Routine[]; 

constructor(private boxingRoutine:BoxingRoutineService){
  
}


ngOnInit(): void {
  this.getAllRoutines();
}

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
