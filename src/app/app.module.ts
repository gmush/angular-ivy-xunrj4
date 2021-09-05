import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule],
  declarations: [AppComponent, StudentComponent, StudentsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
