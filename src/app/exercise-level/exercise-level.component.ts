import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-exercise-level',
  templateUrl: './exercise-level.component.html',
  styleUrls: ['./exercise-level.component.scss']
})
export class ExerciseLevelComponent implements OnInit {

  data: any;
  del: any;
  dataAll:any;
  error: any;
  alldata1: any;


  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  getAllLevel(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/execiseLevel/getAll/").subscribe(
      data=>this.data=data,
      error=>this.error=error
    )
  }

  addLevel(input: {level: number, token: any, subject_id: number}){
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/execiseLevel/add/", input).subscribe(
      data=>this.dataAll=data,
      error=>this.error=error
    )
    window.location.reload();

  }

  leveladd(input: {level: number, token: any, subject_id: number}){
    input.token= this.cookieService.get('token')
    this.addLevel(input)
    
  }
  delLevel(id: any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:{
        id: id,
        token: this.cookieService.get('token')
      }
    };
  this.http.delete("http://50-116-1-120.ip.linodeusercontent.com/execiseLevel/delete/", options).subscribe(
      data=>this.del=data
    )  
    window.location.reload();

  }
  getAllLanguage(){
    
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/subject/getall/").subscribe(
      data=>this.alldata1=data,
      error=>this.error=error
    )
    
  }

  ngOnInit(): void {
    this.getAllLevel()
    this.getAllLanguage()
  }

  openModal(){
    const open = document.getElementById('open');
    const modal = document.getElementById('myForm');

    if(open!=null && modal!=null){
      if(modal.style.display==='none'){
        modal.style.display = 'block';
      } else {
        modal.style.display = 'none';
      }
    }
  }

}
