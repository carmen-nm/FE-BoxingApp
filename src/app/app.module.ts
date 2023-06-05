import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExercisesPageComponent } from './components/exercises-page/exercises-page.component';
import { ExerciseItemComponent } from './components/exercise-item/exercise-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ExerciseDetailsComponent } from './components/exercise-details/exercise-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ExercisesPageComponent,
    ExerciseItemComponent,
    ExerciseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
