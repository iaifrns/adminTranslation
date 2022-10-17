import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  alldata: any;
  data: any;
  error: any;
  del: any;
  alldata1:any;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  getAllContent(){
    
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/content/getcontent/").subscribe(
      data=>this.alldata1=data,
      error=>this.error=error
    )
  }

  getAllTitle(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/title/get/").subscribe(
      data=>this.alldata=data,
      error=>this.error=error
    )
  }

  addTitle(input: {titleName: any, titleIcon: any, contentId: number, token: any}){
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/title/add/", input).subscribe(
      data=>this.data=data,
      error=>this.error=error
    )
  }

  titleAdd(input: {titleName: any, titleIcon: any, contentId: number, token: any}){
    input.token= this.cookieService.get('token')
    console.log(input)
    this.addTitle(input)
    window.location.reload();
  }

  deltitle(data: any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:{
        id: data.id,
        token: this.cookieService.get('token')
      }
    };
    this.http.delete("http://50-116-1-120.ip.linodeusercontent.com/title/delete/", options).subscribe(
      data=>this.del=data
    )
    window.location.reload();
  }

  ngOnInit(): void {
    this.getAllContent()
    this.getAllTitle()
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
