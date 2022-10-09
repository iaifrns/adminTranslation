import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  result: any;

  constructor(private http: HttpClient) { }

  loginUser(users: {email: string, password: string, status: string}){
    console.log(users)
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/teachers/login/", users).subscribe(
      data=>this.result=data
    )
  }

  ngOnInit(): void {
  }

}
