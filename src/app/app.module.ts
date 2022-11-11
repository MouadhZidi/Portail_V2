import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { authInterceptorProviders } from './helpers/auth-interceptor';
import { Register2Component } from './pages/register2/register2.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NgToastModule } from 'ng-angular-popup';
import { MenuComponent } from './pages/menu/menu.component';
import { CongeMainComponent } from './pages/conge/conge-main/conge-main.component';
import { CongeHeaderComponent } from './pages/conge/conge-header/conge-header.component';
import { BulletinPaieComponent } from './pages/paie/EtatApresPaie/bulletin-paie/bulletin-paie.component';
import { RetenuComponent } from './pages/paie/retenu/retenu.component';

import { NgxPrintModule } from 'ngx-print';


import { AgGridModule } from "@ag-grid-community/angular";

import { EmployeeComponent } from './pages/employee/employee.component';
import { ConsltoppoComponent } from './consltoppo/consltoppo/consltoppo.component';
import { BsoinComponent } from './bulsoin/bsoin/bsoin.component';
import { PretavanceComponent } from './pravance/pretavance/pretavance.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DemandeMainComponent } from './pages/Demande/demande-main/demande-main.component';
import { DemandeHeaderComponent } from './pages/Demande/demande-header/demande-header.component';
import { GridCongeComponent } from './ComponentsGrid/grid-conge/grid-conge.component';
import { GridDemandeSituationComponent } from './ComponentsGrid/grid-demande-situation/grid-demande-situation.component';
import { GridDemandePretAvanceComponent } from './ComponentsGrid/grid-demande-pret-avance/grid-demande-pret-avance.component';
import { GridDemandeAutorisationComponent } from './ComponentsGrid/grid-demande-autorisation/grid-demande-autorisation.component';
import { GridDemandeDocumentComponent } from './ComponentsGrid/grid-demande-document/grid-demande-document.component';
import {NgxMaskModule} from 'ngx-mask'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { GridDemandeFormationComponent } from './ComponentsGrid/grid-demande-formation/grid-demande-formation.component';
import { ListCongeComponent } from './ComponentsGrid/ListConge/list-conge/list-conge.component';
import { GridadressenoncourantComponent } from './ComponentsGrid/gridadressenoncourant/gridadressenoncourant.component';
import { GridetablissementComponent } from './ComponentsGrid/gridetablissement/gridetablissement.component';
/* import { GridListBulletinComponent } from './ComponentsGrid/grid-list-bulletin/grid-list-bulletin/grid-list-bulletin.component'; */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    Register2Component,
    NavbarComponent,
    MenuComponent,
    CongeMainComponent,
    CongeHeaderComponent,
    BulletinPaieComponent,
    RetenuComponent,

    EmployeeComponent,
    ConsltoppoComponent,
    BsoinComponent,
    PretavanceComponent,
    DemandeMainComponent,
    DemandeHeaderComponent,
    ListCongeComponent,
    GridCongeComponent,
      GridDemandeSituationComponent,
      GridDemandePretAvanceComponent,
      GridDemandeAutorisationComponent,
      GridDemandeDocumentComponent,
      GridDemandeFormationComponent,
      GridadressenoncourantComponent,
      GridetablissementComponent,
   


  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    NgxPrintModule,
    AgGridModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BsDatepickerModule.forRoot() ,
     NgxMaskModule.forRoot()
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
