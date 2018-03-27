import { Component, Input } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';
import { Company } from '../model/company';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  companies: Company[];
  total: number;

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.apiClientService.getCompanies()
                         .subscribe(
                           companies => this.companies = companies.data,
                         );
  }
}
