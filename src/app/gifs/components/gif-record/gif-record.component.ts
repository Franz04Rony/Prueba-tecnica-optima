import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gif-record',
  templateUrl: './gif-record.component.html',
  styleUrl: './gif-record.component.css'
})
export class GifRecordComponent {
  constructor(private gifsService: GifsService){
  }

  get records(): string[]{
    return this.gifsService.getRecordHistory()
  }

  search(item: string){
    this.gifsService.searchItem(item)
  }

}
