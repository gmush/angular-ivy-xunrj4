import { Injectable } from '@angular/core';
import data from '../data.json';

import { Student } from '../interfaces/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  students: Student[] = [];
  constructor() {
    this.students = data.students;
  }

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {}

  searchStudentes(school_class: string) {}

  addStudent(student: Student) {}

  deleteStudent(id: number) {}

  updateStudent(student: Student) {}
}
