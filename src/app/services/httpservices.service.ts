import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  emitter = new EventEmitter<String>();

  constructor(public http: HttpClient) {}

  // from=2020-03-29&to=2020-03-29

  getNews(){
    return this.http.get('https://newsapi.org/v2/everything?qInTitle=+nigeria&pageSize=20&language=en&sortBy=popularity&apiKey=2b33bffc9a694476b245a56d2a927279&page=1').pipe(delay(0), retry(3));
  }

  getHeadlines(){
    return this.http.get('http://newsapi.org/v2/top-headlines?country=ng&pageSize=20&language=en&apiKey=2b33bffc9a694476b245a56d2a927279&page=2').pipe(delay(0), retry(3));


  }
}
