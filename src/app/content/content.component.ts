import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
