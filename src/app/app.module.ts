import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ApiClientService } from './services/api/api-client.service';
import { CompaniesService } from './services/api/companies.service';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    ApiClientService,
    CompaniesService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
