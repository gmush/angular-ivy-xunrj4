import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private studentService: StudentService) {}

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

  close() {}
}
