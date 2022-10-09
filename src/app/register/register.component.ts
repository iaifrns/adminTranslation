import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private http: HttpClient) { }

  result : any;
  path: string="";
  urls: string= "http://50-116-1-120.ip.linodeusercontent.com/teachers/"

  CreateTeacher( teachers: {firstName: string, lastName:string, dob: string, email: string, password: string} ){
    console.log(teachers)
    this.path= this.urls+"register/"
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/teachers/register/", teachers).subscribe(
      data => this.result = data
    )
    console.log(this.result)
  }

  ngOnInit(): void {
  }

}
