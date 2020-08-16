import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  name="";
  score=0;
  constructor() { }

  ngOnInit(): void {
    var userData = JSON.parse(localStorage.getItem('user_data'));
    this.name = userData.data.firstName + userData.data.lastName;
    this.score = userData.data.exam_score;
  }

}
