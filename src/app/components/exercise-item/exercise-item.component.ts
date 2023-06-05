import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise';
import { Boxing1Service } from 'src/app/services/boxing1.service';
import {Input} from '@angular/core'

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent {
  // variables
  @Input() 
  exercise!: Exercise;

  constructor(private boxing1:Boxing1Service){
    // this.exercise = this.boxing1.;
  }
}
