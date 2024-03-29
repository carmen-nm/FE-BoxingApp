import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Boxing1Service } from 'src/app/services/boxing1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/interfaces/exercise';


@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.css']
})
export class EditExerciseComponent implements OnInit {
  exercise!: Exercise;

  editExerciseForm: FormGroup;

  nameInput: FormControl;
  setsInput: FormControl;
  repetitionsInput: FormControl;
  imgInput: FormControl;


  // myName!: string;

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

    this.editExerciseForm = new FormGroup({

      name: this.nameInput,
      sets: this.setsInput,
      repetitions: this.repetitionsInput,
      img: this.imgInput

    });
  }

  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params["id"];    
      this.boxing1.getExercise(id).subscribe({
        next: (data) =>{
          this.exercise = data;

          this.editExerciseForm.get('name')?.setValue(this.exercise.name);        
          this.editExerciseForm.get('sets')?.setValue(this.exercise.sets);        
          this.editExerciseForm.get('repetitions')?.setValue(this.exercise.repetitions);        
          this.editExerciseForm.get('img')?.setValue(this.exercise.img);        
        }
      })
  }

  onSubmit(): void {
    const id = this.activatedRoute.snapshot.params["id"];    
    this.boxing1.putExercise(id, this.editExerciseForm.value).subscribe(
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
