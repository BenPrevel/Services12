import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa-service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css'],
})
export class NasaComponent {
  imageOfTheDay: any;

  constructor(private nasaService: NasaService) {
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      this.imageOfTheDay = data;
      console.log(this.imageOfTheDay);
    });
  }
}
