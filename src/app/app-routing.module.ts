import { HeaderComponent } from "@ag-grid-community/core/dist/cjs/es5/components/framework/componentTypes";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsltoppoComponent } from "./consltoppo/consltoppo/consltoppo.component";
import { CongeHeaderComponent } from "./pages/conge/conge-header/conge-header.component";
import { CongeMainComponent } from "./pages/conge/conge-main/conge-main.component";
import { EmployeeComponent } from "./pages/employee/employee.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { BulletinPaieComponent } from "./pages/paie/EtatApresPaie/bulletin-paie/bulletin-paie.component";
import { RegisterComponent } from "./pages/register/register.component";
import { BsoinComponent } from "./bulsoin/bsoin/bsoin.component";
import { PretavanceComponent } from "./pravance/pretavance/pretavance.component";
import { DemandeHeaderComponent } from "./pages/Demande/demande-header/demande-header.component";
import { GridCongeComponent } from "./ComponentsGrid/grid-conge/grid-conge.component";
import { Register2Component } from "./pages/register2/register2.component";
import { GuardauthService } from "./services/guardauth.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent,canActivate:[GuardauthService] },
  { path: "login", component: LoginComponent },
  { path: "conge", component: CongeHeaderComponent,canActivate:[GuardauthService] },
  { path: "bulletin_paie", component: BulletinPaieComponent,canActivate:[GuardauthService] },
  { path: "employee", component: EmployeeComponent,canActivate:[GuardauthService] },
  { path: "consltopp", component: ConsltoppoComponent,canActivate:[GuardauthService] },
  { path: "conslbsoin", component: BsoinComponent,canActivate:[GuardauthService] },
  { path: "pravance", component: PretavanceComponent,canActivate:[GuardauthService] },
  { path: "register2", component: Register2Component },


  { path: "demande", component: DemandeHeaderComponent,canActivate:[GuardauthService] },

  
  { path: "grid", component: GridCongeComponent,canActivate:[GuardauthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
