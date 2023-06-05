import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ExercisesPageComponent } from './components/exercises-page/exercises-page.component';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';

const routes: Routes = [
  {
    path:"exercises",
    component: ExercisesPageComponent
  },
  {
    path:"exercises/:id",
    component: ExerciseDetailsComponent
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
