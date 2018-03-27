import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../model/company';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiClientService {

  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getCompanies (): Observable<Company[]> {
    return this.http.get(this.apiUrl)
                    .map(res => res)
  }

}
