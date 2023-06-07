import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoxingUserService } from 'src/app/services/boxing-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
  user!: User; 

  newUserForm: FormGroup;

  usernameInput: FormControl;
  passwordInput: FormControl;


  constructor(private boxingUser: BoxingUserService, private activatedRoute: ActivatedRoute, private router: Router) {  
    
    
    this.usernameInput = new FormControl('', [
      Validators.required,
    ]);
    this.passwordInput = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    

    this.newUserForm = new FormGroup({

      username: this.usernameInput,
      password: this.passwordInput,


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
    this.boxingUser.postUser(this.newUserForm.value).subscribe(
      {
        next:(data) =>{          
          // window.history.back();
          this.router.navigate(["/login"]);
        },
        error:(error) =>{
          console.log(error)
          // this.goBack(); 
        }
      }
    )
  }
}
