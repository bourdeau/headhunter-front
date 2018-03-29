import {Injectable} from '@angular/core';
import {ApiClientService} from './api-client.service';

@Injectable()

export class CompaniesService {

    constructor(private api: ApiClientService) {}

    /*
    * Get Companies
    */
    public getCompanies(): any {
        return this.api.get('/companies');
    }
}
