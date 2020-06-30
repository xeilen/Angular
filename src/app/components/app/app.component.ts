import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-root',
  template: `<h1>hello</h1>
        <app-post *ngFor="let p of posts" [post]="p"></app-post>
  `,
  styles: [`h1 {
    background: lightslategray;
  }`]
})
export class AppComponent {

  posts: Post[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => this.posts = data);
  }
}
