import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any;
  constructor(private _authservice: AuthService)
   {
      
   }
  
  registerForm = new FormGroup(
    {
      email: new FormControl('',[Validators.required, Validators.email]),
      pass:new FormControl('',[Validators.required])
    }
  );
  ngOnInit(): void {
  }
  sendData()
  {
    
    console.log(this.registerForm.value);
  }
  get email()
  {
    return this.registerForm.get("email");
  }
  get pass() {
    return this.registerForm.get("pass");
  }
  register()
  {
    this._authservice.register(this.registerForm.value).subscribe((response: any) => { this.user = response },
    error => {console.log("Error")})
  }
}
