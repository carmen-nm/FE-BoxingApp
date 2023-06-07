import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoxingRoutineService } from 'src/app/services/boxing-routine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Routine } from 'src/app/interfaces/routine';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.css']
})
export class EditRoutineComponent implements OnInit{
  routine!: Routine; 

  editRoutineForm: FormGroup;

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

    this.editRoutineForm = new FormGroup({

      name: this.nameInput,
      routineType: this.routineTypeInput,
      duration: this.durationInput,
      equipment: this.equipmentInput,
      img: this.imgInput

    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"];    
    this.boxingRoutine.getRoutine(id).subscribe({
      next: (data) =>{
        this.routine = data;

        this.editRoutineForm.get('name')?.setValue(this.routine.name);        
        this.editRoutineForm.get('routineType')?.setValue(this.routine.routineType);        
        this.editRoutineForm.get('duration')?.setValue(this.routine.duration);        
        this.editRoutineForm.get('equipment')?.setValue(this.routine.equipment);     
        this.editRoutineForm.get('img')?.setValue(this.routine.img);     
      }
    })
} 

onSubmit(): void {
  const id = this.activatedRoute.snapshot.params["id"];    
  this.boxingRoutine.putRoutine(id, this.editRoutineForm.value).subscribe(
    {
      next:(data) =>{          
        window.history.back();
      },
      error:(error) =>{
        console.log(error)
        // this.goBack(); 
      }
    }
  )
}
 
}
