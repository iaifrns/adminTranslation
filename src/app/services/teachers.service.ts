import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  urls = "50-116-1-120.ip.linodeusercontent.com/teachers";

  constructor(private  http:  HttpClient) { }

  RegisterTeacher(inputdata: any){
    return this.http.post(this.urls, inputdata)
  }
}
