import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.studentService.getStudent(id);
  }

  save(): void {
    if (this.student) {
      this.studentService.updateStudent(this.student);
    }
  }

  close() {}
}
