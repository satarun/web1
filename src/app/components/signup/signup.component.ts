import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:FormGroup;
  constructor(private fb:FormBuilder) {
    this.signup=this.fb.group({
      name:new FormControl(),
      last:new FormControl(),
      user:new FormControl(),
      password:new FormControl(),
      cpassword:new FormControl(),
      date:new FormControl()
    })
  }
  submit(){
    if(this.signup.invalid ){
      alert ("fill the details")

    }
   
    else{
      
    //return this.signup.value;
    console.log(this.signup.value);
    }
  }
  ngOnInit(): void {
  }

}
