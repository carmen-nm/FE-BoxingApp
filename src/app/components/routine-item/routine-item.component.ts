import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Routine } from 'src/app/interfaces/routine';
import { BoxingRoutineService } from 'src/app/services/boxing-routine.service';
import {Input} from '@angular/core'
import { BoxingUserService } from 'src/app/services/boxing-user.service';

@Component({
  selector: 'app-routine-item',
  templateUrl: './routine-item.component.html',
  styleUrls: ['./routine-item.component.css']
})
export class RoutineItemComponent {
   // variables
   @Input() 
   routine!: Routine;
   boxingUserService: BoxingUserService;

   constructor(private boxingRoutine:BoxingRoutineService, private boxingUser: BoxingUserService){
    this.boxingUserService = boxingUser;
  }
}
