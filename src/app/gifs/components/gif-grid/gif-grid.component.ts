import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrl: './gif-grid.component.css'
})
export class GifGridComponent {
  constructor(private gifsService:GifsService){}

  get gifs(){
    return this.gifsService.getGifs()
  }
}
