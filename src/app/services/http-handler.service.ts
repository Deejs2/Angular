import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  private addUrl="localhost:8080/personalDetail/save";

  constructor(private http: HttpClient) { }

  addPersonalDetail(data : any): Observable<any>{
    return this.http.post<any>(this.addUrl, data);
  }
}
