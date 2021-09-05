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

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudent();
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
    this.studentService.addStudent();
  }

  close() {}
}
