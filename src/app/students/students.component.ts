import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Student } from '../interfaces/student';
import { StudentService } from '../services/student.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  add(): void {
    const modalRef = this.modalService.open(StudentComponent);
    this.studentService.addStudent();
  }

  delete(student: Student): void {
    this.students = this.students.filter(s => s !== student);
    this.studentService.deleteStudent(student.id);
  }

  edit(student: Student) {
    const modalRef = this.modalService.open(StudentComponent);
    //modalRef.componentInstance.id = 2;
  }

  filterClass(school_class: string): void {
    this.students = this.studentService.getStudents();
    this.students = this.students.filter(s => s.class === school_class);
  }
}
