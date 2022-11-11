import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupRequest } from 'src/app/model/signup-request';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  user:SignupRequest=new SignupRequest();

  form: any = {
    adrelectronique: null,
    use_lname: null,
    use_psw:null,
    usepswd:null,

  

  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorage,private route:Router) { }

  ngOnInit() {
  }

  add() {

    this.authService.register2(this.user).subscribe(
      data=>{this.route.navigate(['/home'])
      },

      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      )}






       // localStorage.setItem("us",username);








}