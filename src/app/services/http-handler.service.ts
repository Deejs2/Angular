import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  private baseUrl="http://localhost:8080/personalDetail/save";
  private getUrl="http://localhost:8080/personalDetail/fetch";
  private postAddress="http://localhost:8080/address/save";
  private getAddress="http://localhost:8080/address/fetch";
  private getPersonalDetailByIdUrl = "http://localhost:8080/personalDetail/fetch/";

  constructor(private http: HttpClient) { }

  addPersonalDetail(data : any): Observable<any>{
    return this.http.post<any>(this.baseUrl, data);
  }

  getPersonalDetail(): Observable<any>{
    return this.http.get<any>(this.getUrl);
  }

  addAddressDetail(data:any): Observable<any>{
    return this.http.post<any>(this.postAddress, data);
  }

  getAddressDetail():Observable<any>{
    return this.http.get<any>(this.getAddress);
  }

  //make api for update by id
  getPersonalDetailById(id:number):Observable<any>{
    return this.http.get<any>(this.getPersonalDetailByIdUrl+id)
  }
}
