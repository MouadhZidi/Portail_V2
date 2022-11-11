import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();

  form: any = {
    username: null,
    password: null,
    matricule:null,
    email:null,
    nom:null,
    prenom:null

  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorage,private route:Router) { }

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