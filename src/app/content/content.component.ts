import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  alldata: any;
  alldata1: any;
  error: any;
  data: any;
  del: any;
  

  constructor( private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  getAllLanguage(){
    
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/subject/getall/").subscribe(
      data=>this.alldata1=data,
      error=>this.error=error
    )
  }

  getAllContent(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/content/getcontent/").subscribe(
      data=>this.alldata=data,
      error=>this.error=error
    )
  }

  addContent(input: {contents: any, icon: any, subjectId: number, token: any}){
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/content/addcontent/", input).subscribe(
      data=>this.data=data,
      error=>this.error=error
    )
  }

  contentAdd(input: {contents: any, icon: any, subjectId: number, token: any}){
    input.token= this.cookieService.get('token')
    console.log(input)
    this.addContent(input)
    window.location.reload();
  }

  delcontents(data: any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:{
        id: data.id,
        token: this.cookieService.get('token')
      }
    };
    this.http.delete("http://50-116-1-120.ip.linodeusercontent.com/content/deletecontent/", options).subscribe(
      data=>this.del=data
    )
    window.location.reload();
  }

  ngOnInit(): void {
    this.getAllLanguage()
    this.getAllContent()
    console.log(this.alldata)
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
