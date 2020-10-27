import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 lgn:FormGroup;
  constructor( private fb :FormBuilder) {
    this.lgn = this. fb. group({
      luser:new FormControl(),
      lpassword:new FormControl()
    })
   }

  ngOnInit(): void {
  }

}
