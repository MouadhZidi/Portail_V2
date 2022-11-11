import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdrpersService {

  constructor(private http: HttpClient) { }
  getbycodesocandmatpers = (x:any,y:any): Observable<any[]> => {
    return this.http.get<any[]>("http://192.168.2.95:8080/adrpers/getbysocandmat/"+x+"/"+y);
  };
  getgouvernorat(x:any,y:any){
  return this.http.get<any[]>("http://192.168.2.95:8080/adrpers/get1/"+x+"/"+y);}
  getbycodesocandmatperslist = (x:any,y:any): Observable<any[]> => {
    return this.http.get<any[]>("http://192.168.2.95:8080/adrpers/getbysocandmatlist/"+x+"/"+y);
  };

}
