import { Component , OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Exercise } from 'src/app/interfaces/exercise';
import { Boxing1Service } from 'src/app/services/boxing1.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit{

    // variables
    exercise!: any;
    constructor(private boxing1:Boxing1Service, private activatedRoute: ActivatedRoute, private router: Router){
      
    }
  
  
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params["id"];
      // this.getExercise(id);
      this.boxing1.getExercise(id).subscribe(
        {
          next:(data) =>{
            console.log(data);
            this.exercise = data;
          },
          error:(error) =>{
            console.log(error)
            this.goBack(); 
          }
        }
      )
    }


    // getExercise(id): void{
    //   this.boxing1.getExercise(id).subscribe(
    //     {
    //       next:(data) =>{
    //         console.log(data);
    //         this.exercise = data;
    //       },
    //       error:(error) =>{
    //         console.log(error)
    //       }
    //     }
    //   )
    // }

    goBack(): void {
      window.history.back();
      //this.router.navigate(["/exercises"]);
    }

    deleteExercise(): void{
      if(confirm("Do you want remove this exercise?")){

        const id = this.activatedRoute.snapshot.params["id"];
        this.boxing1.deleteExercise(id).subscribe(
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
