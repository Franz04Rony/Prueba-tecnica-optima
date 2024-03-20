import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifGridComponent } from './components/gif-grid/gif-grid.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { GifRecordComponent } from './components/gif-record/gif-record.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    GifGridComponent,
    SearchInputComponent,
    GifRecordComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
