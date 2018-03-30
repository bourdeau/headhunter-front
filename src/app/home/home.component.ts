import { Component, Input } from '@angular/core';
import { CompaniesService } from '../services/api/companies.service';
import { Company } from '../model/company';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  companies: Company[];
  collectionSize: 100;
  page = 1;

  constructor(private apiClientService: CompaniesService) { }

  ngOnInit() {
    this.getCompanies(0);
  }

  onPager(page: number): void {
    this.getCompanies(page);
  }

  getCompanies(page: number): void {
    this.apiClientService.getCompanies(page)
      .subscribe(
        res => {
          this.companies = res.data,
            this.collectionSize = res.total
        }
      );
  }
}
