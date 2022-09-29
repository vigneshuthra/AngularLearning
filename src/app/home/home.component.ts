import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  newMovies: any;
  popularMovies: any;

  ngOnInit(): void {
    this.getNewMovies();
    this.getPopularMovies();
  }
  getNewMovies() {
    this.http
      .get('http://localhost:4200/assets/data/new-movies.json')
      .subscribe((movies) => {
        this.newMovies = movies;
        console.log(this.newMovies);
      });
  }
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log(this.popularMovies);
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
