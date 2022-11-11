import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-conge-header',
  templateUrl: './conge-header.component.html',
  styleUrls: ['./conge-header.component.css'],
})
export class CongeHeaderComponent implements OnInit {
  
  nom:any
  prenom:any
  constructor(private serv:ApiService,private tokenService:TokenStorage) {}

  ngOnInit() {
    this.getnom()
    this.getprenom()
  }
  getnom(){
    this.serv.getNom(this.tokenService.getUser().cod_soc,this.tokenService.getUser().matpers).subscribe(
      (data: any) => {
        this.nom = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getprenom(){
    this.serv.getPrenom(this.tokenService.getUser().cod_soc,this.tokenService.getUser().matpers).subscribe(
      (data: any) => {
        this.prenom = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
