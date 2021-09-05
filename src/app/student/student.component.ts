import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Student } from '../interfaces/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student | undefined;
  @Input() id: number;

  currentId = 0;
  studentForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.id !== -1) {
      this.student = this.studentService.getStudent(this.id);
    }

    this.currentId = this.studentService.currentId;

    this.studentForm = this.fb.group({
      name: [this.student?.name, Validators.required],
      surname: [this.student?.surname, Validators.required],
      class: [this.student?.class, Validators.required],
      grade: [this.student?.grade, Validators.required]
    });

    console.log('this.studentForm', this.studentForm);
  }

  onSubmit() {
    this.activeModal.dismiss('Cross click');
    this.studentForm.value.id = this.id;
    console.warn(this.studentForm.value);
    this.studentService.addStudent(this.studentForm.value);
  }

  close() {}
}
