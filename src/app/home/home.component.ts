import { Component, Input } from '@angular/core';
import { CompaniesService } from '../services/api/companies.service';
import { Company } from '../model/company';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  companies: Company[];
  total: number;

  constructor(private apiClientService: CompaniesService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.apiClientService.getCompanies()
                         .subscribe(
                           res => {
                             this.companies = res.data,
                             this.total = res.total
                           }
                         );
  }
}
