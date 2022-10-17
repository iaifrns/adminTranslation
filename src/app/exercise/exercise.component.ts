import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  data: any;
  del: any;
  id: any;
  alldata: any;
  alldata1: any;
  alldata2: any;
  error: any;
  dataAll: any;

  constructor(private http:HttpClient, private cookieService:CookieService) { }

  getAllLevel(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/execiseLevel/getAll/").subscribe(
      data=>this.alldata1=data,
      error=>this.error=error
    )
  }

  add(input: {question: any, ans: any, levelid: any}){
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/execise/add/", input).subscribe(
      data=>this.dataAll=data,
      error=>this.error=error
    )
    window.location.reload();
  }
  getAll(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/execise/getAll/").subscribe(
      data=>this.alldata=data,
      error=>this.error=error
    )
  }

  deleteExec(id: any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:{
        id: id,
        token: this.cookieService.get('token')
      }
    };
  this.http.delete("http://50-116-1-120.ip.linodeusercontent.com/execise/delete/", options).subscribe(
      data=>this.del=data
    )  
    window.location.reload();
  }

  addChoise(input: {token: any, execiseId:number, answer: any}){
    console.log(input)
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/multipleChoise/add/", input).subscribe(
      data=>this.dataAll=data,
      error=>this.error=error
    )
    window.location.reload();
  }

  multiExec(input: {token: any, execiseId:number, answer: any}){
    input.token= this.cookieService.get("token")
    input.execiseId=this.id
    this.addChoise(input)
  }

  getAllChoises(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/multipleChoise/getAll/").subscribe(
      data=>this.alldata2=data,
      error=>this.error=error
    )
  }

  addexercise(input: {question: any, ans: any, levelid: any, token: any}){
    input.token= this.cookieService.get("token")
    this.add(input)
  }

  ngOnInit(): void {
    this.getAllLevel()
    this.getAll()
    this.getAllChoises()
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
  openModal1(id: any){
    this.id=id
    const open1 = document.getElementById('open1');
    const modal1 = document.getElementById('myForm1');

    if(open1!=null && modal1!=null){
      if(modal1.style.display==='none'){
        modal1.style.display = 'block';
      } else {
        modal1.style.display = 'none';
      }
    }
  }

}
