import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder }  from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DefaultService } from './../../services/default.service'
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  isLoading = false;

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private defaultService: DefaultService) { }

  ngOnInit(): void {

  }

  onSubmit(){
   console.log('Login')
   console.log(this.profileForm.value);
​   this.isLoading = true;
​   this.defaultService.start_exam(this.profileForm.value).then(data=>{
    if(data["success"]) {
      localStorage.setItem('user_data', JSON.stringify(data));
      this.router.navigate(['take_exam_live']);
      this.isLoading = false;
    }else {
      alert(data['message']);
      this.isLoading = false;
    }
  })
  }

}
