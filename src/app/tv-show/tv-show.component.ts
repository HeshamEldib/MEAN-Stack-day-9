import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css'],
})
export class TvShowComponent implements OnInit {
  // imagePath: string = 'https://image.tmdb.org/t/p/w500';
  private searchValue: string = '';
  allTvShows!: any[];
  imagePath: string = this.myTvService.imagePath;
  language: string = 'en-Us';
  totalTv!: number;
  pageSize: number = 20;
  currentPage: number = 1;

  constructor(public myTvService: TvService) {}

  ngOnInit(): void {
    this.myTvService.getAllTv(this.currentPage).subscribe({
      next: (res) => {
        this.allTvShows = res.results;
        this.totalTv = res.total_results;
      },
    });
  }

  set setSearchValue(value: string) {
    this.searchValue = value;
    this.searchTv(value);
  }

  searchTv(tvName: string) {
    this.myTvService.searchAllTv(tvName, this.currentPage).subscribe({
      next: (data) => {
        this.allTvShows = data.results;
        console.log(data.results);
      },
    });
  }

  changeLanguage() {
    this.language = this.myTvService.changeLanguage();
    this.myTvService.getAllTv().subscribe({
      next: (response) => {
        this.allTvShows = response.results;
      },
    });
  }

  changePage(pageInfo: PageEvent) {
    this.currentPage = pageInfo.pageIndex + 1;
    this.myTvService.getAllTv(this.currentPage).subscribe({
      next: (response) => {
        this.allTvShows = response.results;
        this.totalTv = response.total_results;
      },
    });
  }
}
