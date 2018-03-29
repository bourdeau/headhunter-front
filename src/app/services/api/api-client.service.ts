import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiClientService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get (url): Observable<any[]> {
    return this.http.get(this.apiUrl + url)
                    .map(res => res)
  }

}
