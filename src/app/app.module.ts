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

@NgModule({
  declarations: [
    AppComponent,
    ExercisesPageComponent,
    ExerciseItemComponent,
    ExerciseDetailsComponent,
    NavbarComponent,
    EditExerciseComponent,
    NewExerciseComponent,
    NewPostComponent
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
