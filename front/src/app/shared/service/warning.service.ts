import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from '../model/pageable.model';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

 
  apiUrl='http://localhost:8080/warnings';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }


  public getWarnings(): Observable<Pageable>{
    return this.httpClient.get<Pageable>(this.apiUrl);
  }

}
