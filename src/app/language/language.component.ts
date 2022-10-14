import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  addLanguage(input: {subjectIcon: any, subjectName: string }){
    this.http.post("http://50-116-1-120.ip.linodeusercontent.com/subject/add/", input)
  }
  deleteLanguage(id: any){
    this.http.delete("http://50-116-1-120.ip.linodeusercontent.com/subject/delete/", id)
  }
  getAllLanguage(){
    this.http.get("http://50-116-1-120.ip.linodeusercontent.com/subject/add/")
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("myForm")
    );
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
