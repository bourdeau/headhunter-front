import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiClientService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get (url, parameters) {
    let params = new HttpParams();

    for (let key in parameters) {
        let value = parameters[key];
        params = params.append(key, value);
    }

    return this.http.get(this.apiUrl + url, {params: params})
                    .map(res => res)
  }
}
