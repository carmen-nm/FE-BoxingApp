import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ExercisesPageComponent } from './components/exercises-page/exercises-page.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditExerciseComponent } from './components/edit-exercise/edit-exercise.component';
import { NewExerciseComponent } from './components/new-exercise/new-exercise.component';
import { RoutinesPageComponent } from './components/routines-page/routines-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { RoutineDetailsComponent } from './components/routine-details/routine-details.component';
import { NewRoutineComponent } from './components/new-routine/new-routine.component';
import { EditRoutineComponent } from './components/edit-routine/edit-routine.component';
import { RoutineExercisesComponent } from './components/routine-exercises/routine-exercises.component';
import { HomeComponent } from './components/home/home.component';
import { UserRoutinesComponent } from './components/user-routines/user-routines.component';

const routes: Routes = [

  {
    path:"",
    component: HomeComponent
  },
  {
    path:"exercises",
    component: ExercisesPageComponent
  },
  {
    path:"exercises/:id",
    component: ExerciseDetailsComponent
  },
  {
    path:"exercises/:id/edit",
    component: EditExerciseComponent
  },
  {
    path:"exercises/post/exercise",
    component: NewExerciseComponent
  },
  {
    path:"routines",
    component: RoutinesPageComponent
  },
  {
    path:"routines/:id",
    component: RoutineDetailsComponent
  },
  {
    path:"routines/:id/edit",
    component: EditRoutineComponent
  },
  {
    path:"routines/:id/exercises",
    component: RoutineExercisesComponent
  },
  {
    path:"routines/post/routine",
    component: NewRoutineComponent
  },
  {
    path:"login",
    component: LoginPageComponent
  },
  {
    path:"users/:id",
    component: UserProfileComponent
  },
  {
    path:"users/:id/routines",
    component: UserRoutinesComponent
  }, 
  {
    path:"post/user",
    component: NewUserComponent
  }
  
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
