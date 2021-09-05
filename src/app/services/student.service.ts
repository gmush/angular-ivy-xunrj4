import { Injectable } from '@angular/core';
import data from '../data.json';

import { Student } from '../interfaces/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  students: Student[] = [];
  currentId = 0;
  constructor() {
    this.students = data.students;
    this.currentId =
      Math.max.apply(
        Math,
        this.students.map(function(o) {
          return o.id;
        })
      ) + 1;
  }

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {}

  searchStudentes(school_class: string) {}

  addStudent(student: Student) {
    this.students.push({
      id: this.currentId++,
      name: student.name,
      surname: student.surname,
      class: student.class,
      grade: student.grade
    });
  }

  deleteStudent(id: number) {}

  updateStudent(student: Student) {}

  getAverageGrade() {
    const sum = this.students.reduce((a, b) => a + b.grade, 0);
    const avg = sum / this.students.length || 0;
    return avg;
    // this.students.map(function(o) {
    //   return o.grade;
    // })
  }
}
