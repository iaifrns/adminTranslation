import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  result: any;
  error: any;

  constructor(private http: HttpClient) { }

  loginUser(users: {email: string, password: string, status: string}){
    console.log(users)
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/teachers/login/", users).subscribe(
      data=>this.result=data,
      error => this.error=error.error.detail
    )
  }

  getUser(users: {email: string, password: string, status: string}){
    
    if (users.status == '2'){
      this.loginUser(users)
    }else{
      console.log(users.status)
    }
    
  }

  ngOnInit(): void {
  }

}
