import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  students;

  name = '';
  age = 0;
  grade = 0;

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  addStudent() {
    this.studentService.addStudent(
      this.name,
      this.age,
      this.grade
    );

    this.students = this.studentService.getStudents();

    this.name = '';
    this.age = 0;
    this.grade = 0;
  }

  removeStudent(id: number) {
    this.studentService.removeStudent(id);

    this.students = this.studentService.getStudents();
  }
}