import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExercisesPageComponent } from './components/exercises-page/exercises-page.component';
import { ExerciseItemComponent } from './components/exercise-item/exercise-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditExerciseComponent } from './components/edit-exercise/edit-exercise.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewExerciseComponent } from './components/new-exercise/new-exercise.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { RoutinesPageComponent } from './components/routines-page/routines-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { RoutineItemComponent } from './components/routine-item/routine-item.component';
import { RoutineDetailsComponent } from './components/routine-details/routine-details.component';
import { NewRoutineComponent } from './components/new-routine/new-routine.component';
import { EditRoutineComponent } from './components/edit-routine/edit-routine.component';
import { RoutineExercisesComponent } from './components/routine-exercises/routine-exercises.component';
import { ExerciseToChooseComponent } from './components/exercise-to-choose/exercise-to-choose.component';
import { HomeComponent } from './components/home/home.component';
import { RoutineToChooseComponent } from './components/routine-to-choose/routine-to-choose.component';
import { UserRoutinesComponent } from './components/user-routines/user-routines.component';
import { ProfileCtaComponent } from './components/profile-cta/profile-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesPageComponent,
    ExerciseItemComponent,
    ExerciseDetailsComponent,
    NavbarComponent,
    EditExerciseComponent,
    NewExerciseComponent,
    NewPostComponent,
    RoutinesPageComponent,
    LoginPageComponent,
    UserProfileComponent,
    NewUserComponent,
    RoutineItemComponent,
    RoutineDetailsComponent,
    NewRoutineComponent,
    EditRoutineComponent,
    RoutineExercisesComponent,
    ExerciseToChooseComponent,
    HomeComponent,
    RoutineToChooseComponent,
    UserRoutinesComponent,
    ProfileCtaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
