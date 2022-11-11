import { Component, OnInit } from '@angular/core';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roles:any
  constructor(    private tokenStorage:TokenStorage,
    ) { }

  ngOnInit(): void {
    this.roles = this.tokenStorage.getUser().uselogin
  }

}
