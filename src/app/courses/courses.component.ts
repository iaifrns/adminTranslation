import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  title = 'micRecorder';
  record: any;
  error: any;
  url: any;
  recording = false;
  closeResult: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
