import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CvComponent } from './cv/cv.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { EducationHistoryComponent } from './education-history/education-history.component';


@NgModule({
  declarations: [
    AppComponent, CvComponent, WorkHistoryComponent, EducationHistoryComponent, 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
