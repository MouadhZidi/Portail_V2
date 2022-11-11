import { Component } from "@angular/core";
import { GridApi } from "ag-grid-community";
import { ApiService } from "src/app/services/api.service";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { EtablissementService } from "src/app/services/etablissement.service";
import { TokenStorage } from "src/app/services/token-storage";

@Component({
  selector: 'app-gridetablissement',
  templateUrl: './gridetablissement.component.html',
  styleUrls: ['./gridetablissement.component.css']
})
export class GridetablissementComponent  {
  title = "grid";
  api!: GridApi;
  rowData: any[] = [];

  constructor(private serv: EtablissementService,private token: TokenStorage) {}
  columnDefs = [
    {
      field: "dat_emb",
      filter: "agDateColumnFilter",
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
      headerName: "Etablissement",
      field: "etablissement",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 160,
      pinned: true,
    },
    {
      headerName: "Emplois",
      field: "emploi",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 160,
      pinned: true,
      },
    {
      headerName: "fonction",
      field: "fonct_corr",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 160,
      pinned: true,
    },
   
  ];

  ngOnInit(): void {
    this.getFacture();
  }
  defaultColDef = {
    sortable: true,
    filter: true,
  };
  getFacture() {
    this.serv.getetablissementbycodesocandmatpers(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
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