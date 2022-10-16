import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  result: any;
  error: any;
  cookieValue: any;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
    private route: ActivatedRoute
    ) { }

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
      this.cookieService.set('token', this.result.token)
      this.cookieValue= this.cookieService.get('token')
      console.log(this.cookieValue, this.result.token)
      
      this.router.navigate(['home'])
    }else{
      console.log(users.status)
    }
    
  }

  ngOnInit(): void {
    if (this.cookieService.get('token')){
      this.router.navigate(['home'])
    }
  }

}
