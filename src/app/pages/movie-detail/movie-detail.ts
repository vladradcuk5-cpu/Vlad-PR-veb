import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetailComponent implements OnInit {

  id: number = 0;

  movie: any;

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.id = Number(params['id']);

      this.movie = this.movies.find(
        movie => movie.id === this.id
      );

    });

  }

}