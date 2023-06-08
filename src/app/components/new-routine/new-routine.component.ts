import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoxingRoutineService } from 'src/app/services/boxing-routine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine } from 'src/app/interfaces/routine';

@Component({
  selector: 'app-new-routine',
  templateUrl: './new-routine.component.html',
  styleUrls: ['./new-routine.component.css']
})
export class NewRoutineComponent implements OnInit{

  routine!: Routine; 

  newRoutineForm: FormGroup;

  nameInput: FormControl;
  routineTypeInput: FormControl;
  durationInput: FormControl; 
  equipmentInput: FormControl;
  imgInput: FormControl;

  constructor(private boxingRoutine: BoxingRoutineService, private activatedRoute: ActivatedRoute, private router: Router) {  
    
    
    this.nameInput = new FormControl('', [
      Validators.required,
    ]);
    this.routineTypeInput = new FormControl('', [
      Validators.required,
    ]);
    this.durationInput = new FormControl('', [
      Validators.required,
    ]);
    this.equipmentInput = new FormControl('', [ 
      Validators.required,
    ]);
    this.imgInput = new FormControl('', [ 
      Validators.required,
    ]);

    this.newRoutineForm = new FormGroup({

      name: this.nameInput,
      routineType: this.routineTypeInput,
      duration: this.durationInput,
      equipment: this.equipmentInput,
      img: this.imgInput

    });
  }

  ngOnInit(): void {

    }

    onSubmit(): void {
      const id = this.activatedRoute.snapshot.params["id"];         
      this.boxingRoutine.postRoutine(this.newRoutineForm.value).subscribe(
        {
          next:(data) =>{          
            // window.history.back();
            this.router.navigate([`/routines/${data.id}`]);
          },
          error:(error) =>{
            console.log(error)
            // this.goBack(); 
          } 
        }
      )
    }
 
}
