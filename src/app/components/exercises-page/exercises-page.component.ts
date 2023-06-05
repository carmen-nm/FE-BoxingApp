import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise';
import { Boxing1Service } from 'src/app/services/boxing1.service';

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.css']
})
export class ExercisesPageComponent implements OnInit{

  // variables
  exercises: Exercise[];

  constructor(private boxing1:Boxing1Service){
    this.exercises = this.boxing1.exercises;
  }


  ngOnInit(): void {
    this.getAllExercises();
  }


  // request from component
  // void porq no es inmediato
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
