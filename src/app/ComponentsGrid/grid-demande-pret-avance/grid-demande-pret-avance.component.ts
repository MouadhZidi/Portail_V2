import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Module } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { DemandeService } from 'src/app/services/demande.service';
import { TokenStorage } from 'src/app/services/token-storage';

@Component({
  selector: 'app-grid-demande-pret-avance',
  templateUrl: './grid-demande-pret-avance.component.html',
  styleUrls: ['./grid-demande-pret-avance.component.css']
})
export class GridDemandePretAvanceComponent implements OnInit {


  api!: GridApi;
  rowData: any[] = [];

  constructor(private factureService: DemandeService,private tokenService:TokenStorage) {}
  columnDefs = [
    {
      field: "dateDemande",
      filter: "agDateColumnFilter",
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
    { headerName: "codGrpPret", 
    field: "codGrpPret", 
    editable: true,
    oatingFilter: true,   
       filter:true,

  },

    {
      headerName: "typPret",
      field: "typPret",
      editable: true,
      filter:true,
      floatingFilter: true,

    },

    {
      headerName: "mntDem",
      field: "mntDem",
      editable: true,
      floatingFilter: true,

      
    },

    {
      headerName: "mntDem",
      field: "mntDem",
      editable: true,
      floatingFilter: true,

      
    },
    {
      headerName: "reponse",
      field: "reponse",
      editable: true,
      floatingFilter: true,

      
    },
    {
      headerName: "fileName",
      field: "fileName",
      editable: true,
      floatingFilter: true,

      
    },
    {
      headerName: "fichierJoint",
      field: "fichierJoint",
      editable: true,
      floatingFilter: true,

      
    },
  ];

  ngOnInit(): void {
    this.getListSituation();
  }
  defaultColDef = {
    sortable: true,
    filter: true,
  };
  getListSituation() {
    this.factureService.GetChambreByCode(this.tokenService.getUser().cod_soc,this.tokenService.getUser().matpers,"P").subscribe(
      (data: any[]) => {
        this.rowData = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modules: Module[] = [ClientSideRowModelModule];
}
