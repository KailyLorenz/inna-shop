import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayImagesComponent } from './play-images/play-images.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PlayImagesComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PlayModule { }
