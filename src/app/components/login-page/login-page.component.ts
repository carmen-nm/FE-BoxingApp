import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BoxingUserService } from 'src/app/services/boxing-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  user!: User; 

  checkUserForm: FormGroup;

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
    

    this.checkUserForm = new FormGroup({

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
    this.boxingUser.LoginUser(this.checkUserForm.value).subscribe(
      {
        next:(data) =>{          

          console.log(data);
          this.boxingUser.userLoggedId = data.id;
          localStorage.setItem("userId", data.id);
          
          this.router.navigate(["/users", data.id]);
        },
        error:(error) =>{
          console.log(error)
          alert("The credentials are not correct.")
          // this.goBack(); 
        }
      }
    )
  }
}
