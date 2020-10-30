import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 lgn:FormGroup;
 submitted=false;
  constructor( private fb :FormBuilder,private service:WebService) {
    this.lgn = this. fb. group({
      luser:new FormControl(),
      lpassword:new FormControl()
    })
   }

  ngOnInit(): void {
  }
  get f(){
     return this.lgn.controls;
  }
logn(){
  this.submitted=true;
  if(this.lgn.valid){
   
    console.log("submit");
    this.service.lgnp(this.lgn.value).subscribe(res=>{
      console.log("success");
    })
  }else{
    alert("fill");
  } 
}
reset(){
  this.submitted=false;
}
}
