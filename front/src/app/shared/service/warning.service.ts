import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from '../model/pageable.model';
import { Warning } from '../model/warning.model';

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

  public postWarning(warning: Warning): Observable<Warning>{
    return this.httpClient.post<Warning>(this.apiUrl, warning);
  }

  public getWarnings(): Observable<Pageable>{
    return this.httpClient.get<Pageable>(this.apiUrl);
  }

  public updateWarnings(id: number, warning: Warning): Observable<void>{
     return this.httpClient.put<void>(`${this.apiUrl}/${id}`, warning);
  }

  public deleteWarning(id: number): void{
     this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
  }

}
