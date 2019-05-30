import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-images',
  templateUrl: './play-images.component.html',
  styleUrls: ['./play-images.component.css']
})
export class PlayImagesComponent implements OnInit {
  images = ['https://w-dog.ru/wallpapers/3/8/533665634032182.jpg',
  'https://www.nastol.com.ua/download.php?img=201608/1600x900/nastol.com.ua-186185.jpg',
    'https://w-dog.ru/wallpapers/3/8/533665634032182.jpg',
    'https://www.nastol.com.ua/download.php?img=201608/1600x900/nastol.com.ua-186185.jpg',
  ];
  numActive = [];
  userImages = [];
  points = 0;
  constructor() { }

  ngOnInit() {
  }

  showImage(idx: number) {
    if (this.numActive.length === 2) {
      this.setPoints();
      this.numActive = [];

    }
    if (!this.numActive.includes(idx)) {
      this.numActive.push(idx);
    } else {
      const index = this.numActive.indexOf(idx);
      delete this.numActive[index];
    }
  }

  getActiveCard(idx: number) {
    return !this.numActive.includes(idx);
  }

  private setPoints() {
    if (!this.userImages.includes(this.images[this.numActive[0]])) {
      if (this.images[this.numActive[0]] === this.images[this.numActive[1]]) {
        this.points += 10;
        this.userImages.push(this.images[this.numActive[0]]);
      }
    }
  }
}
