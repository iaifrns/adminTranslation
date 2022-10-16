import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare var window:any;

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  title= 'ang13-bootstrap5-modal-demo';
  formModal: any;
  data: any;
  error: any;
  alldata: any;
  del: any;
  token:any;
  cookiesValue: any;
  fileToUpload: File | null = null;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  addLanguage(input: {subjectIcon: any, subjectName: string, token: any }){
    input.token = this.cookieService.get('token')
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/subject/add/", input).subscribe(
      data=>this.data=data,
      error=>this.error=error
    )
  }
  deleteLanguage(data: any){
    console.log(data)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:{
        id: data.id,
        token: data.token
      }
    };
  this.http.delete("http://50-116-1-120.ip.linodeusercontent.com/subject/delete/", options).subscribe(
      data=>this.del=data
    )  
  }
  getAllLanguage(){
    
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/subject/getall/").subscribe(
      data=>this.alldata=data,
      error=>this.error=error
    )
    
  }

  language(data: {subjectName: any, subjectIcon: any, token:any}){
    this.addLanguage(data)
    console.log(this.error)
    window.location.reload();
    this.openModal()
  }

  delLanguage(data: any){
    var input={
      "id": data.id,
      "token": this.cookieService.get('token')
    }
    this.deleteLanguage(input)
    window.location.reload();
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("myForm")
    );
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
