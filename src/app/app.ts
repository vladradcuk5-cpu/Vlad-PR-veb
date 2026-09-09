import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Movie {
  title: string;
  year: number;
  rating: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  movies: Movie[] = [
    {
      title: 'Interstellar',
      year: 2014,
      rating: 9
    },
    {
      title: 'Avatar',
      year: 2009,
      rating: 8
    },
    {
      title: 'Titanic',
      year: 1997,
      rating: 7
    }
  ];

  newMovie: Movie = {
    title: '',
    year: 0,
    rating: 0
  };

  addMovie(): void {
    if (
      this.newMovie.title.trim() === '' ||
      this.newMovie.year <= 0 ||
      this.newMovie.rating < 1 ||
      this.newMovie.rating > 10
    ) {
      return;
    }

    this.movies.push({
      title: this.newMovie.title.trim(),
      year: this.newMovie.year,
      rating: this.newMovie.rating
    });

    this.newMovie = {
      title: '',
      year: 0,
      rating: 0
    };
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
  }

  getRatingClass(rating: number): string {
    if (rating >= 8) {
      return 'high-rating';
    }

    if (rating >= 5) {
      return 'medium-rating';
    }

    return 'low-rating';
  }
}