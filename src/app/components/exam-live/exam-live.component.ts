import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DefaultService } from './../../services/default.service'
@Component({
  selector: 'app-exam-live',
  templateUrl: './exam-live.component.html',
  styleUrls: ['./exam-live.component.css']
})
export class ExamLiveComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Math MCQ Quiz', cols: 2, rows: 1 },
      ];
    })
  );

  public data = [
    {
      question: {number: 1, question: "1. Which one of the following is a regular quadrilateral?"},
      options: [{value: 1, name: "Square"}, {value: 2, name: "Trapezium"}, {value: 3, name: "Kite"}, {value: 4, name: "Rectangle"}]
    },
    {
      question: {number: 2, question: "2. The perimeter of a parallelogram whose parallel sides have lengths equal to 12 cm and 7cm is:"},
      options: [{value: 1, name: "21cm"}, {value: 2, name: "42cm"}, {value: 3, name: "19cm"}, {value: 4, name: "38cm"}]
    },
    {
      question: {number: 3, question: "3. If ∠A and ∠C are two opposite angles of a parallelogram, then:"},
      options: [{value: 1, name: "∠A > ∠C"}, {value: 2, name: "∠A = ∠C"}, {value: 3, name: "∠A < ∠C"}, {value: 4, name: "None of the above"}]
    },
    {
      question: {number: 4, question: "4. If ∠A and ∠B are two adjacent angles of a parallelogram. If ∠A = 70°, then ∠B = ?"},
      options: [{value: 1, name: "70°"}, {value: 2, name: "90°"}, {value: 3, name: "110°"}, {value: 4, name: "180°"}]
    },
    {
      question: {number: 5, question: "5. ABCD is a rectangle and AC & BD are its diagonals. If AC = 10cm, then BD is:"},
      options: [{value: 1, name: "10 cm"}, {value: 2, name: "5 cm"}, {value: 3, name: "15 cm"}, {value: 4, name: "20 cm"}]
    },
  ]

  Answer1 = 0
  Answer2 = 0
  Answer3 = 0
  Answer4 = 0
  Answer5 = 0

  finalAnswers = [];

  constructor(private breakpointObserver: BreakpointObserver, private defaultService: DefaultService, private router: Router) {}

  onAnswer(value, number){

    switch (number) {
      case 1:
        this.Answer1 = value.value;
        break;
      case 2:
        this.Answer2 = value.value;
        break;
      case 3:
        this.Answer3 = value.value;
        break;
      case 4:
        this.Answer4 = value.value;
        break;
      case 5:
        this.Answer5 = value.value;
    }

  }
  onSubmit(){
    this.finalAnswers = [];
    this.finalAnswers.push.apply(this.finalAnswers, [this.Answer1, this.Answer2, this.Answer3, this.Answer4, this.Answer5])

    var userData =JSON.parse(localStorage.getItem('user_data'));
    
    var data = {
      answers: this.finalAnswers, 
      test_number: 1,
      _id: userData.data._id
    }

    console.log(data);
    
    this.defaultService.end_exam(data).then(data=>{
      console.log(data);
      if(data['success']){
        localStorage.setItem('user_data', JSON.stringify(data));
        this.router.navigate(['/final_results'])
      } else {
        alert(data['message']);
      }
    })
  }



}
