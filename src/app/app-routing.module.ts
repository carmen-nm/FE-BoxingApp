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

const routes: Routes = [

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
    path:"login",
    component: LoginPageComponent
  },
  {
    path:"users/:id",
    component: UserProfileComponent
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
