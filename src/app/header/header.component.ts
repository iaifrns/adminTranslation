import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    if (!this.cookieService.get('token')){
      this.router.navigate([''])
    }
  }

}
