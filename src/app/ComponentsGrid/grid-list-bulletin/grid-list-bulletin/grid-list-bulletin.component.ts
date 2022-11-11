/* import { Component } from '@angular/core';
import { GridApi } from "ag-grid-community";
import { ApiService } from "../../../services/api.service";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { TokenStorage } from "src/app/services/token-storage";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grid-list-bulletin',
  templateUrl: './grid-list-bulletin.component.html',
  styleUrls: ['./grid-list-bulletin.component.css']
})
export class GridListBulletinComponent {

  title = "grid";
  api!: GridApi;
  rowData: any[] = [];
  bul: any=[]
  possVH:any;
  formDocument!:FormGroup

  constructor(private BullService: ApiService,private tokenService:TokenStorage) { }

  columnDefs = [
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
      checkboxSelection: true,
      
     
    },
  ]
 ngOnInit(): void {
    this.GetBull();
  }


  defaultColDef = {
    sortable: true,
    filter: true,
  };
  





  GetBull() {
    this.BullService.GetBull(this.formDocument.value).subscribe(
      (data: any[]) => {
        this.bul = data;
        this.rowData = this.bul.possVH

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  modules: Module[] = [ClientSideRowModelModule];
}
 */