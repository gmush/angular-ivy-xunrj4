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
    public studentService: StudentService,
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
    modalRef.componentInstance.id = -1;
  }

  delete(student: Student, index: number): void {
    this.students = this.students.filter(s => s !== student);
    this.studentService.deleteStudent(student.id);
  }

  edit(student: Student, index: number) {
    const modalRef = this.modalService.open(StudentComponent);
    modalRef.componentInstance.id = student.id;
  }

  filterClass(school_class: string): void {
    this.students = this.studentService.getStudents();
    if (school_class) {
      this.students = this.students.filter(s => s.class === school_class);
    }
  }
}
