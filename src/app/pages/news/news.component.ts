import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  articles; headlines; flag = false;
  article: any; article_content; article_img; article_title;
  article_url: any;
  today: any;
  day: any;

  constructor(private newsService: HttpservicesService) { }

  ngOnInit(): void {

    this.newsService.getNews().subscribe(data => {
      this.articles = data['articles'].filter(elem => { return elem['urlToImage' && 'content'] != null });
      // console.log(this.articles);
      this.flag = true;

    });


    this.newsService.getHeadlines().subscribe(data => {
      this.headlines = data['articles'].filter(elem => { return elem['urlToImage'] && elem['content'] != null });
      // console.log('headlines',this.headlines);
      this.flag = true;

    });
  }
  openModal(id, callback) {
    this.article = this.headlines.filter(elem => { return elem['publishedAt'] == id });

    this.article == '' ? this.article = this.articles.filter(elem => { return elem['publishedAt'] == id }) : '';


    this.article_content = this.article[0].content;
    this.article_img = this.article[0].urlToImage;
    this.article_title = this.article[0].title;
    this.article_url = this.article[0].url;

    console.log(id);
    callback;
  }

}


