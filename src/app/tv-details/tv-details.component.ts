import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css'],
})
export class TvDetailsComponent implements OnInit {
  selectedTv: any;

  constructor(public mySelectedTv: TvService, public route: ActivatedRoute) {}
  imagePath: string = this.mySelectedTv.imagePath;

  ngOnInit(): void {
    let tvId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.mySelectedTv.getTvById(tvId).subscribe({
      next: (res) => {
        this.selectedTv = res;
      },
    });
  }
}
