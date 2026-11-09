import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {
  title: string = '';
  director: string = '';
  description: string = '';

  movies: { title: string; director: string; description: string }[] = [];

  addMovie(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.movies.push({
      title: this.title,
      director: this.director,
      description: this.description
    });

    form.resetForm();
  }
}