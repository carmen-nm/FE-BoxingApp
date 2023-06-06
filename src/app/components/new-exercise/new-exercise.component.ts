import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Boxing1Service } from 'src/app/services/boxing1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/interfaces/exercise';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.css']
})
export class NewExerciseComponent implements OnInit{
  exercise!: Exercise;

  newExerciseForm: FormGroup;

  nameInput: FormControl;
  setsInput: FormControl;
  repetitionsInput: FormControl;
  imgInput: FormControl;


  constructor(private boxing1:Boxing1Service, private activatedRoute: ActivatedRoute, private router: Router) {  
    
    
    this.nameInput = new FormControl('', [
      Validators.required,
    ]);
    this.setsInput = new FormControl('', [
      Validators.required,
    ]);
    this.repetitionsInput = new FormControl('', [
      Validators.required,
    ]);
    this.imgInput = new FormControl('', [
      Validators.required,
    ]);

    this.newExerciseForm = new FormGroup({

      name: this.nameInput,
      sets: this.setsInput,
      repetitions: this.repetitionsInput,
      img: this.imgInput

    });
  }

  ngOnInit(): void {
  //     const id = this.activatedRoute.snapshot.params["id"];    
  //     this.boxing1.getExercise(id).subscribe({
  //       next: (data) =>{
  //         this.exercise = data;

  //         this.newExerciseForm.get('name')?.setValue(this.exercise.name);        
  //         this.newExerciseForm.get('sets')?.setValue(this.exercise.sets);        
  //         this.newExerciseForm.get('repetitions')?.setValue(this.exercise.repetitions);        
  //         this.newExerciseForm.get('img')?.setValue(this.exercise.img);        
  //       }
  //     })
  }

  onSubmit(): void {
    const id = this.activatedRoute.snapshot.params["id"];    
    this.boxing1.postExercise(this.newExerciseForm.value).subscribe(
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
