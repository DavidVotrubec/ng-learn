import { Component, OnInit } from '@angular/core';

// TODO: I want to use RxJS or NgRX, but 
// RxJS does not work - I got compile errors, ftw
// and I do not know where to begin with NgRX


@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refresh(){
    alert('fresh');
  }
}
