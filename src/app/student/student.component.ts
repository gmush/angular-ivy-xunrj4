import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Student } from '../interfaces/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student | undefined;
  @Input() id;

  currentId = 0;

  studentForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    class: ['', Validators.required],
    grade: [1, Validators.required]
  });

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getStudent();
    this.currentId = this.studentService.currentId;
  }

  getStudent(): void {
    // this.studentService.getStudent();
  }

  update(): void {
    if (this.student) {
      this.studentService.updateStudent(this.student);
    }
  }

  add(): void {
    this.studentService.addStudent({
      id: 0,
      name: 'student.name',
      surname: 'student.surname',
      class: 'student.class',
      grade: 6
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.studentForm.value);
  }

  close() {}
}
