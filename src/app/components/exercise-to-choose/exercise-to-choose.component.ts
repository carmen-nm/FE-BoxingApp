import { Component , OnInit} from '@angular/core';
import { Exercise } from 'src/app/interfaces/exercise';
import {Input} from '@angular/core'
import { BoxingRoutineService } from 'src/app/services/boxing-routine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercise-to-choose',
  templateUrl: './exercise-to-choose.component.html',
  styleUrls: ['./exercise-to-choose.component.css']
})
export class ExerciseToChooseComponent {
    // variables
    @Input() 
    exercise!: Exercise;

    constructor(private boxingRoutine:BoxingRoutineService, private activatedRoute: ActivatedRoute, private router: Router){
      // this.exercise = this.boxing1.;
    }

    addExercise(exerciseId: any):void{             
      if(confirm("Do you want to add this exercise?")){     
      const routineId = this.activatedRoute.snapshot.params["id"];      
      this.boxingRoutine.addRoutineExercises(routineId, exerciseId).subscribe(
        {
          next:(data) =>{
            // Actualizar listado
            console.log("Update exercise list");
            this.router.navigate([`/routines/${routineId}`]);

          },
          error:(error) =>{
            console.log(error)
            
          }
        }
      )
      }
    }

    deleteExercise(exerciseId: any):void{
      if(confirm("Do you want remove this exercise?")){
        const routineId = this.activatedRoute.snapshot.params["id"]; 
        this.boxingRoutine.deleteRoutineExercises(routineId, exerciseId).subscribe(
          {
            next:(data) =>{
              // Actualizar listado
              console.log("Update exercise list");
              this.router.navigate([`/routines/${routineId}`]);
  
            },
            error:(error) =>{
              console.log(error)
              
            }
          }
        )
        }
    }
 
}
