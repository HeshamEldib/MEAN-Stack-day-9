import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  apiKay: string = '1d9f1aa05a75b0409ab04efe585574af';
  language: string = 'en-Us';

  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(public http: HttpClient) {}

  getAllTv(pageNumber:number=1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKay}&language=${this.language}&page=${pageNumber}`
    );
  }

  getTvById(tvId: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${this.apiKay}&language=${this.language}`
    );
  }

  searchAllTv(tvName: string, pageNumber:number=1):Observable<any> {
    if (tvName === "") {
      return this.getAllTv();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKay}&query=${tvName}&page=${pageNumber}`
      );
    }
  }

  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';

    return this.language;
  }
}
