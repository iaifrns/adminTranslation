import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  logout(){
    this.cookieService.delete('token')
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
