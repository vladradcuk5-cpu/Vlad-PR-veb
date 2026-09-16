import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class MoviesComponent {

  movies = [
    {
      id: 1,
      title: 'The Dark Knight',
      year: 2008,
      rating: 9
    },
    {
      id: 2,
      title: 'Inception',
      year: 2010,
      rating: 8
    },
    {
      id: 3,
      title: 'The Matrix',
      year: 1999,
      rating: 9
    }
  ];

}