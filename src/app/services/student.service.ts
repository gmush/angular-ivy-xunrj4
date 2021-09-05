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

  addStudent() {
    this.students.push({
      id: 22,
      name: 'aas',
      surname: 'sad',
      class: '2A',
      grade: 2
    });
  }

  deleteStudent(id: number) {}

  updateStudent(student: Student) {}
}
