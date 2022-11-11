import { Component } from "@angular/core";
import { GridApi } from "ag-grid-community";
import { ApiService } from "../../../services/api.service";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { TokenStorage } from "src/app/services/token-storage";

@Component({
  selector: 'app-list-conge',
  templateUrl: './list-conge.component.html',
  styleUrls: ['./list-conge.component.css']
})
export class ListCongeComponent {

  title = "grid";
  api!: GridApi;
  rowData: any[] = [];

  public sideBar!: boolean;


  
  constructor(private congeService: ApiService,private tokenService:TokenStorage) {
    
  }
  columnDefs = [
    {
      headerName: "Cum congé",
      field: "cum_cng",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
      pinned: true,
      checkboxSelection: true,
     
    },
    
    {
      headerName: "Conge pris",
      field: "pris_cng",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
      pinned: true,
      checkboxSelection: true,
    },

    {
      headerName: "Solde congé",
      field: "sold_cng",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
      pinned: true,
      checkboxSelection: true,
    },

    {
      headerName:"Id",
      headerGroupComponent:'headerGroupComponent',
      children:[
        {
          field:'id.cod_soc',
          width:130,
          pinned:true,

        },
        {
          field:'id.mat_pers',
          width:150,
          pinned:true,
        },
        {
          field:'id.annee_cng',
          width:150,
          editable: true,
          resizable: true,
          sortable: true,
          filter: true,
          floatingFilter: true,
          pinned: true,
          checkboxSelection: true,
        },
        {
          field:'id.typ_cng',
          width:150,
          pinned:true,
        }

      ]
    },

    
    {
      
      headerName: "Congé injustifier",
      field: "cng_njustif",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 130,
      pinned: true,
      checkboxSelection: true,
     
    },



  ];

  ngOnInit(): void {
    this.GetCongeById();
  }
  defaultColDef = {
    sortable: true,
    filter: true,
  };
  /* getFacture() {
    this.factureService.GetChambreByCode().subscribe(
      (data: any[]) => {
        this.rowData = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
 */
  GetCongeById() {
    this.congeService.GetCongeById(this.tokenService.getUser().cod_soc,this.tokenService.getUser().matpers).subscribe(
      (data: any[]) => {
        this.rowData = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onQuickFilterChanged($event: any) {
    this.api.setQuickFilter($event.target.value);
}

  modules: Module[] = [ClientSideRowModelModule];
}