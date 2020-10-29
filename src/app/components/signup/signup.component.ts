import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WebService} from '../../services/web.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:FormGroup;
submitted=false;
  constructor(private fb:FormBuilder,private service : WebService) {
    this.signup=this.fb.group({
      name:["",[Validators.required,Validators.minLength(10)]],
      last:["",[Validators.required,Validators.minLength(10)]],
      user:["",[Validators.required,Validators.minLength(10)]],
      password:["",[Validators.required,Validators.minLength(10)]],
      cpassword:["",[Validators.required,Validators.minLength(10)]],
      date:["",Validators.required]
    })
  }
  ngOnInit(): void {
  }
  get f(){
    return this.signup.controls;
  }
  submit(){
    this.submitted=true;
    if(this.signup.invalid)
    {
        if((this.signup.value["password"])!=(this.signup.value["cpassword"])){
          alert("Must Match Password and confirm Password");
        }
     
        //alert ("fill the details");
    }
    else{
      debugger;
         // return this.signup.value;
       
          console.log(this.signup.value );
          this.service.signUp(this.signup.value).subscribe(res=>{
            debugger;
                console.log("success");
                alert(this.signup.value["user"]);  
             })
    
        }
  }
  onReset() {
    this.submitted = false;
    this.signup.reset();
}

}
/*
    ||(this.signup.value["password"])!=(this.signup.value["cpassword"])else if((this.signup.value["password"])===(this.signup.value["cpassword"])){
      console.log(this.signup.value);
       this.service.signUp(this.signup.value).subscribe(res=>{
          console.log("success");
          alert(this.signup.value["user"]);  
        
    }*/