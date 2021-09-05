import { Injectable } from '@angular/core';
import data from '../data.json';

import { Student } from '../interfaces/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  students: Student[] = [];
  currentId = 0;
  averageGrade = 0;
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
    this.averageGrade = this.getAverageGrade();
    return this.students;
  }

  getStudent(id: number): Student {
    return this.students.filter(s => s.id === id)[0];
  }

  addStudent(student: Student) {
    this.students.push({
      id: this.currentId++,
      name: student.name,
      surname: student.surname,
      class: student.class,
      grade: Number(student.grade)
    });
    this.averageGrade = this.getAverageGrade();
  }

  deleteStudent(id: number) {
    this.students.forEach((value, index) => {
      if (value.id == id) this.students.splice(index, 1);
    });
    this.averageGrade = this.getAverageGrade();
  }

  getAverageGrade() {
    const sum = this.students.reduce((prev, student) => {
      console.log(prev, student.grade);
      return prev + student.grade;
    }, 0);
    const avg = sum / this.students.length || 0;
    return avg;
  }
}
