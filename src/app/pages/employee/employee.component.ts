import { Component, OnInit } from '@angular/core';
import { AdrpersService } from 'src/app/services/adrpers.service';
import { PersonnelService } from 'src/app/services/personnel.service';
import { RENSEIGNEMENTPERSService } from 'src/app/services/renseignement-pers.service';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  get44:any
  ad:any
  affect:any
  deb:any
  fin:any
  nat:any
  etat:any
  sexe:any
  tab: any;
   gouv: any ;
  tab2: any;
  getbymatcod:any
  adrpersbycodeandmat:any
  rensper:any
  g:any;
  mat:any

  x:string=""
  constructor(private serv:PersonnelService,private serv2:AdrpersService,private serv3:RENSEIGNEMENTPERSService,private token:TokenStorage) { }

  ngOnInit() {
    this.mat=this.token.getUser().matpers

     this.get3()
     this.getregheure()
    this.getfincycle()
    this.getdebcycle()
    this.getPERSObycodeandmat()
    this.getadrpersbycodeandmat()
    this.getRENS_PERSObycodeandmat()
    this.getgouv()
    this.getetatpaie()
    this.getnat()
    this.getaffect()
  }
  getregheure(){
    this.serv3.get4(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
      data => {
        this.get44 = data; console.log('exected' + data);
      },
      err => {
        console.log(err);
      }
      );
  }
  getaffect(){
    this.serv.getaffect(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
      data => {
        this.affect = data; console.log('exected' + data);
      },
      err => {
        console.log(err);
      }
      );
    
    
    
    }

  getnat(){
    this.serv.getnat(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
      data => {
        this.nat = data; console.log('exected' + data);
      },
      err => {
        console.log(err);
      }
      );
    
    
    
    }
    getetatpaie(){
      this.serv.getetatpaie(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
        data => {
          this.etat = data; console.log('exected' + data);
        },
        err => {
          console.log(err);
        }
        );
      
      
      
      }
  



  
  getPERSObycodeandmat(){
    
   
    this.serv.getbycodesocandmatpers(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
    data => {
      this.getbymatcod = data; console.log('exected' + data);
    },
    err => {
      console.log(err);
    }
    );



}

getadrpersbycodeandmat(){
    
   
  this.serv2.getbycodesocandmatpers(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
  data => {
    this.adrpersbycodeandmat = data; console.log('exected' + data);
   
  },
  err => {
    console.log(err);
  }
  );



}
getRENS_PERSObycodeandmat(){
    
   
  this.serv3.getRENSEIGNEMENTPERSbycodesocandmatpers(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
  data => {
    this.rensper = data; console.log('exected' + data);
  },
  err => {
    console.log(err);
  }
  );



}
getgouv(){
  this.serv2.getgouvernorat(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
    data => {
      this.gouv = data; console.log('exected' + data);
    },
    err => {
      console.log(err);
    }
    );
  
  
  
  }
  getdebcycle(){
    this.serv3.getdebcycle(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
      data => {
        this.deb = data; console.log('exected' + data);
      },
      err => {
        console.log(err);
      }
      );
    
    
    
    }
    getfincycle(){
      this.serv3.getfin(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
        data => {
          this.fin = data; console.log('exected' + data);
        },
        err => {
          console.log(err);
        }
        );
      
      
      
      }
      get3(){
        this.serv3.get3(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
          data => {
            this.ad = data; console.log('exected' + data);
          },
          err => {
            console.log(err);
          }
          );

      }
     
  



}
