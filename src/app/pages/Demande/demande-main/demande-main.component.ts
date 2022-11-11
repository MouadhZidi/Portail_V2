import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DemandeService } from 'src/app/services/demande.service';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-demande-main',
  templateUrl: './demande-main.component.html',
  styleUrls: ['./demande-main.component.css']
})
export class DemandeMainComponent implements OnInit {
  tab: number = 1;
  x: string='';
  rowData: any[] = [];
  typeFormation: any[] = [];
  themeFormations: any[] = [];


  formattedDate: any;
  pipe = new DatePipe('en-US');
  valuedate = new Date();
titreFormation:any[]=[]
amount!:any
  userFile:any ;
  dataForm!: FormGroup
  formPretAvance!:FormGroup
  formAutorisation!:FormGroup
  formDocument!:FormGroup
  formFormation!:FormGroup

  myDateValue!:Date;

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File ; // Variable to store file
   public imagePath:any;
   imgURL: any;
   currentDate!:Date
   public message!: string;
   
  constructor(private demandeService:DemandeService,private formBuilder : FormBuilder
    ,private tokenService:TokenStorage) { }

  ngOnInit(): void {
    this.myDateValue = new Date();
    this.dataForm = this.formBuilder.group({
      id_libre_demande : [''],
      

      dateDemande : [(new Date()).toLocaleDateString().substring(0,10),Validators.required],
      txtDem: ['',Validators.required],
      reponse:[''],
      typDemande:['S'],
      matPers:[this.tokenService.getUser().matpers],
      codSoc:[this.tokenService.getUser().cod_soc]
    });


    this.formPretAvance = this.formBuilder.group({
      
      

      dateDemande : [(new Date()).toLocaleDateString().substring(0,10),Validators.required],
      codGrpPret : ['',Validators.required],
      typPret: ['P'],
      mntDem:['',Validators.required],
      reponse:[''],

      matPers:[this.tokenService.getUser().matpers],
codSoc:[this.tokenService.getUser().cod_soc]
    });
    this.formAutorisation = this.formBuilder.group({
      
      

      dateDemande : [(new Date()).toLocaleDateString().substring(0,10),Validators.required],
      heurS : ['',Validators.required],
      heurR:['',Validators.required],
      typDemande: ['A'],
      minR:['',Validators.required],
      minS:['',Validators.required],
      txtDem:['',Validators.required],
      reponseChef:[''],
      txtChef:[''],
      reponse:[''],

      matPers:[this.tokenService.getUser().matpers],
codSoc:[this.tokenService.getUser().cod_soc]
    });
    this.formDocument = this.formBuilder.group({

      dateDemande : [(new Date()).toLocaleDateString().substring(0,10),Validators.required],
      typDemande: ['D'],
      numAttest:['',Validators.required],
      txtChef:[''],
      reponse:[''],

      matPers:[this.tokenService.getUser().matpers],
codSoc:[this.tokenService.getUser().cod_soc]
    });
    this.formFormation = this.formBuilder.group({
      dateDemande : [(new Date()).toLocaleDateString().substring(0,10),Validators.required],
      annee : ['',Validators.required],
      codTheme:['',Validators.required],
      typDemande: ['F'],
      codTit:['',Validators.required],

      codTyp:['',Validators.required],
      datDebut:['',Validators.required],
      datFin:['',Validators.required],
      reponseChef:[''],
      txtChef:[''],
      reponse:[''],

      matPers:[this.tokenService.getUser().matpers],
codSoc:[this.tokenService.getUser().cod_soc]
    });
    this.getListSituation()
    this.getTitreFormation()
    this.getTypeFormation()
    this.getThemeFormation()
  }

  
  onChange(event:any) {
    this.file = event.target.files[0];
}
onSelect(event:any){
 
  this.demandeService.GetTypeFormation(event.target.value).subscribe(
    (data: any[]) => {
      this.typeFormation = data;

      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
  this.demandeService.GetThemeFormation(event.target.value,"0104").subscribe(
    (data: any[]) => {
      this.themeFormations = data;

      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}
onUpload() {
  this.loading = !this.loading;
  const formData = new  FormData();
  const article = this.dataForm.value;
  console.log("elyes : "+this.file)
  formData.append('file',this.file);
  formData.append('demande',JSON.stringify(article));


  console.log(this.file);
this.demandeService.upload(formData).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
              // let file = new Blob([event], { type: 'text/plain' });            
              // var fileURL = URL.createObjectURL(file);
              // window.open(fileURL);
              this.getListSituation()
          }
      }
  );
}

DemandePretAvance() {
  this.loading = !this.loading;
  const formData = new  FormData();
  const article = this.formPretAvance.value;
  console.log("elyes : "+this.file)
  formData.append('file',this.file);
  formData.append('demande',JSON.stringify(article));


  console.log(this.file);
this.demandeService.upload(formData).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
              // let file = new Blob([event], { type: 'text/plain' });            
              // var fileURL = URL.createObjectURL(file);
              // window.open(fileURL);
          }
      }
  );
}

DemandeAutorisation() {
  this.loading = !this.loading;
  const formData = new  FormData();
  const article = this.formAutorisation.value;
  console.log("elyes : "+this.file)
  formData.append('file',this.file);
  formData.append('demande',JSON.stringify(article));


  console.log(this.file);
this.demandeService.upload(formData).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
              // let file = new Blob([event], { type: 'text/plain' });            
              // var fileURL = URL.createObjectURL(file);
              // window.open(fileURL);
          }
      }
  );
}
DemandeDocument() {
  this.loading = !this.loading;
  const formData = new  FormData();
  const article = this.formDocument.value;
  console.log("elyes : "+this.file)
  formData.append('file',this.file);
  formData.append('demande',JSON.stringify(article));


  console.log(this.file);
this.demandeService.upload(formData).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
              // let file = new Blob([event], { type: 'text/plain' });            
              // var fileURL = URL.createObjectURL(file);
              // window.open(fileURL);
          }
      }
  );
}
DemandeFormation() {
  this.loading = !this.loading;
  const formData = new  FormData();
  const article = this.formFormation.value;
  console.log("elyes : "+this.file)
  formData.append('file',this.file);
  formData.append('demande',JSON.stringify(article));


  console.log(this.file);
this.demandeService.upload(formData).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
              // let file = new Blob([event], { type: 'text/plain' });            
              // var fileURL = URL.createObjectURL(file);
              // window.open(fileURL);
          }
      }
  );
}
getListSituation() {
  this.demandeService.GetChambreByCode(this.tokenService.getUser().cod_soc,
  this.tokenService.getUser().matpers,"S").subscribe(
    (data: any[]) => {
      this.rowData = data;

      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}
getTitreFormation() {
  this.demandeService.GetTitreFormation().subscribe(
    (data: any[]) => {
      this.titreFormation = data;

      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}
getTypeFormation() {
  this.demandeService.GetTypeFormation("01").subscribe(
    (data: any[]) => {
      this.typeFormation = data;

      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}
getThemeFormation() {
  this.demandeService.GetThemeFormation("01","0104").subscribe(
    (data: any[]) => {
      this.typeFormation = data;

      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}
}
