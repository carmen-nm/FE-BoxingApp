import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise';
import { Boxing1Service } from 'src/app/services/boxing1.service';

@Component({
  selector: 'app-routine-exercises',
  templateUrl: './routine-exercises.component.html',
  styleUrls: ['./routine-exercises.component.css']
})
export class RoutineExercisesComponent implements OnInit{

    // variables
    exercises!: Exercise[]; 

constructor(private boxing1:Boxing1Service){
  
}


ngOnInit(): void {
  this.getAllExercises();
} 

getAllExercises(): void{
  this.boxing1.getAllExercises().subscribe(
    {
      next:(data) =>{
        console.log(data);
        this.exercises = data;
      },
      error:(error) =>{
        console.log(error) 
      }
    }
  )
}

}
