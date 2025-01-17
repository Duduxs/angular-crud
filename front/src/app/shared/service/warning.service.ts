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

  constructor( private httpClient: HttpClient) { }

  public findByid(id: number): Observable<Warning>{

    return this.httpClient.get<Warning>(`${this.apiUrl}/${id}`);
  }

  public postWarning(warning: Warning): Observable<Warning>{

    return this.httpClient.post<Warning>(this.apiUrl, warning);
  }

  public getWarnings(): Observable<Pageable>{

    return this.httpClient.get<Pageable>(this.apiUrl);
  }

  public updateWarnings(id: number, warning: Warning): Observable<Warning>{

     return this.httpClient.put<Warning>(`${this.apiUrl}/${id}`, warning);
  }

  public deleteWarning(id: number): Observable<Warning>{

    return this.httpClient.delete<Warning>(`${this.apiUrl}/${id}`)
  }

}
