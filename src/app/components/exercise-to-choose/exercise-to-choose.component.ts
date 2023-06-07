import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise';
import { Boxing1Service } from 'src/app/services/boxing1.service';
import {Input} from '@angular/core'

@Component({
  selector: 'app-exercise-to-choose',
  templateUrl: './exercise-to-choose.component.html',
  styleUrls: ['./exercise-to-choose.component.css']
})
export class ExerciseToChooseComponent {
    // variables
    @Input() 
    exercise!: Exercise;

    constructor(private boxing1:Boxing1Service){
      // this.exercise = this.boxing1.;
    }

    addExercise(exerciseId: any):void{

    }

    deleteExercise(exerciseId: any):void{
      
    }
 
}
