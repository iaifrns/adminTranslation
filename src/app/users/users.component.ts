import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data: any;
  error: any;

  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient) { }

  getUsers(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/users/getUser/").subscribe(
      data=>this.data=data,
      error=>this.error=error
    )
  }

  ngOnInit(): void {
    this.getUsers()
  }

}
