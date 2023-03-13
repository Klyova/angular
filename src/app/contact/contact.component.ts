import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userForm: FormGroup;

  constructor(private http: HttpClient, private postServise: PostService) {
    this.userForm = new FormGroup( {
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('',[Validators.required, Validators.email]),
      'userText': new FormControl('', Validators.required)

    });
  }

  ngOnInit(): void {
    this.postServise.fetchPosts();

  }

  onCreatePost(postData: Post) {
    this.postServise.createAndStorePost(postData.userName, postData.userEmail, postData.userText)
  }

  onFetchPost() {
    this.postServise.fetchPosts();
  }

  onClearPosts(){

  }
}
