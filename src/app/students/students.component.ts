import { Component, OnInit } from '@angular/core';

import { Student } from '../interfaces/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    // this.studentService.addStudent();
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id);
  }

  edit(student: Student) {}
}
