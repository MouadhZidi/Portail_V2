import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorage } from 'src/app/services/token-storage';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    matpers: null,
    usepswd: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorage,
    private route: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { matpers, usepswd } = this.form;

    this.authService.login(matpers, usepswd).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        // localStorage.setItem("us",username);
        this.route.navigate(["/home"])
        this.isLoginFailed = false;
        this.isLoggedIn = true;
       
        
      
       
        this.toast.success({
          detail: ' Success Message',
          summary: data.message,
          duration: 5000,
        });
      },
      (err) => {
        /* this.errorMessage = err.error.message;
        this.isLoginFailed = true; */
        this.toast.error({
          detail: ' Error Message',
          summary: 'Login Failed, try again !',
          duration: 5000,
        });
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
