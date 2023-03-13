import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post} from '../models/post.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createAndStorePost(userName: string, userEmail: string, userText: string) {
    const postData: Post = {userName: userName, userEmail: userEmail, userText: userText };
    this.http
      .post<{ name: string }>(
        'https://ng-form-c6034-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });

  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>('https://ng-form-c6034-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'ok' }),
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
      });
  }
}
