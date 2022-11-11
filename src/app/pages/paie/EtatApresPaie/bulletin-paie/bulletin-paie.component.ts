import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GridApi } from 'ag-grid-community';
import { ApiService } from 'src/app/services/api.service';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { TokenStorage } from 'src/app/services/token-storage';
import { Module } from "@ag-grid-community/core";

@Component({
  selector: 'app-bulletin-paie',
  templateUrl: './bulletin-paie.component.html',
  styleUrls: ['./bulletin-paie.component.css'],
})
export class BulletinPaieComponent implements OnInit {

  listInfo:any


  api!: GridApi;
  rowData: any[] = [];
  bul: any=[]
  possVH:any;

 
  dt_bul:any;
  mat_pers:any;
  nom_pers:any;
  cod_serv:any;
  lib_serv:any;
  adm_tech:any;
  lib_adm_tech:any
  cod_sit: any;
  cod_cat: any ;
  cod_grad: any;
  charg_all:any;
  charg_enf:any;
  cod_ech:any;
  nbr_enf:any;
  formDocument!:FormGroup
dateBul?:String;
cod_typ_bul?:String;
  tab: number = 1;
  x: string='';
  a!:string;


  constructor(private serv:ApiService,private tokenService:TokenStorage,private formBuilder :FormBuilder) {}


  ngOnInit(): void {
   
    this.formDocument = this.formBuilder.group({

      dateBul : [''],
      cod_typ_bul: [''],
      mat_pers:[this.tokenService.getUser().matpers,Validators.required],
      cod_soc:[this.tokenService.getUser().cod_soc],
    });
  }



  columnDefs = [
    {
      headerName: "Rubrique",
      field: "abrv_fixe",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
      checkboxSelection: true,
      
     
    },

    {
      headerName: "Date bulletin",
      field: "dt_bul",
      filter: "agDateColumnFilter",
      pinned: true,
      resizable: true,
      width: 100,
      sortable:true,
      floatingFilter: true,
      filterParams: {
        // provide comparator function
        comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
          var dateAsString = cellValue;

          if (dateAsString == null) {
            return 0;
          }

          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          var dateParts = dateAsString.split("/");
          var year = Number(dateParts[2]);
          var month = Number(dateParts[1]) - 1;
          var day = Number(dateParts[0]);
          var cellDate = new Date(year, month, day);

          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
          return 0;
        },
      },
      editable: true,
      cellEditor: "primeCellEditor",
    },
    {
      headerName: "lib_bul",
      field: "lib_bul",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 130,
      pinned: true,
     
      
     
    },

    {
      headerName: "lib_fixe",
      field: "lib_fixe",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 130,
      pinned: true,
     
     
    },
   
    {
      headerName: "mnt_gain",
      field: "mnt_gain",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
     
      
     
    },

    {
      headerName: "mnt_charge",
      field: "mnt_charge",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,

      
     
    },

    {
      headerName: "montant",
      field: "montant",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
   
     
    },

    {
      headerName: "type_par",
      field: "type_par",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
    
      
     
    },
    {
      headerName: "cod_niv",
      field: "cod_niv",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
   
      
     
    },

    {
      headerName: "num_niv",
      field: "num_niv",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
      
      
     
    },

    {
      headerName: "nombre",
      field: "nombre",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
     
      
     
    },

    {
      headerName: "seq",
      field: "seq",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 90,
      pinned: true,
    
     
     
    },
  ]






/*   printerReportt(){
    debugger
    try {
        
        this.service.getReportFacture(this.a)
        .subscribe((data)=>{
          console.log(data)
          let file = new Blob([data], { type: 'application/pdf' });            
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        });
      

    } catch (error) {
      console.log(error)
    }
  } */

  addHotel(){
        
        this.serv.GetBull(this.formDocument.value)
        .subscribe(
      
          (data: any) => {
            this.listInfo = data;
        this.rowData = this.listInfo.possVH
               
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
    }

    defaultColDef = {
      sortable: true,
      filter: true,
    };

    modules: Module[] = [ClientSideRowModelModule];
    
  }

 
  

