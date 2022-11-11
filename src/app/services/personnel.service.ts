import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const pers_API = 'http://127.0.0.1:8080/pers/getbycodesocandmatpers/';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient) { }
  getbycodesocandmatpers(x:any,y:any){
    return this.http.get("http://192.168.2.95:8080/pers/getbycodesocandmatpers/"+x+"/"+y)
  }
  getetatpaie(x:any,y:any){
    return this.http.get("http://192.168.2.95:8080/pers/get1/"+x+"/"+y)


  }
  getnat(x:any,y:any){
    return this.http.get("http://192.168.2.95:8080/pers/get2/"+x+"/"+y)
  }
  getaffect(x:any,y:any){
    return this.http.get("http://192.168.2.95:8080/pers/get3/"+x+"/"+y)
  }
}
