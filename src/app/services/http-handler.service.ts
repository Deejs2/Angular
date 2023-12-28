import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  private baseUrl="http://localhost:8080/personalDetail/save";
  private getUrl="http://localhost:8080/personalDetail/fetch";

  constructor(private http: HttpClient) { }

  addPersonalDetail(data : any): Observable<any>{
    return this.http.post<any>(this.baseUrl, data);
  }

  getPersonalDetail(): Observable<any>{
    return this.http.get<any>(this.getUrl);
  }
}
