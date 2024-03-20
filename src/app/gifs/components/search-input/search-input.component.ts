import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  constructor(private gifsService:GifsService){}

  @ViewChild("searchInput")
  public inputItem!: ElementRef<HTMLInputElement>

  search() {
    const newItem = this.inputItem.nativeElement.value
    this.gifsService.searchItem(newItem)
    this.inputItem.nativeElement.value = ''
  }
}
