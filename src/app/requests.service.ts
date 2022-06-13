import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  public makeRequest(url: string): Promise<any> {
    return this.http.get(url, { responseType: "text" }).toPromise().then(response => response)
      .catch(error => {
        console.error(error);
        return error;
      });
  }
}
