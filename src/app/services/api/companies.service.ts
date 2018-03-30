import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';

@Injectable()

export class CompaniesService {

  constructor(private api: ApiClientService) { }

  /*
  * Get Companies
  */
  public getCompanies(page: number): any {
    let params = { p: page };

    return this.api.get('/companies', params);
  }
}
