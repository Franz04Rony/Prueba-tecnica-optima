import { Injectable } from '@angular/core';
import { Gif } from '../interfaces/gif.interface';

const API_KEY = 'ELnIzK7rWE9mstTmwwEz98cbIbDD0JYn'
const URL = 'https://api.giphy.com/v1/gifs/search'

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor() { }

  private recordHistory: string[] = []

  private gifs: Gif[] = []

  getRecordHistory() {
    return [...this.recordHistory]
  }

  getGifs() {
    return [...this.gifs]
  }

  async searchItem( item:string ): Promise<void>{
    try{

      const res = await fetch(`${URL}?api_key=${API_KEY}&q=${item}&limit=8`)
      const data = await res.json()
      this.gifs = data.data
      if(item === '') return
      if(this.recordHistory.includes(item)){
        this.recordHistory = this.recordHistory.filter((v) => v !== item)
      }
      this.recordHistory.unshift(item)

    }
    catch(e){
      console.log(e)
    }
  }
}
