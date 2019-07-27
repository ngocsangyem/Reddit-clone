import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-12';
  @Input() article: Article;
  constructor() {}

  ngOnInit() {}

  voteUp() {
    this.article.voteUp();
  }
  voteDown() {
    this.article.voteDown();
  }
}
