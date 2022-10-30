import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryLanguagesComponent } from './components/country-languages/country-languages.component';
import { CountryStatsComponent } from './components/country-stats/country-stats.component';
import { ExpertComponent } from './components/expert/expert.component';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from './services/language.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [ 
  {path: 'search/:keyword', component: ExpertComponent},
  {path: 'countries', component: CountryListComponent},
  {path: 'countries/languages/:id', component: CountryLanguagesComponent},
  {path: 'stats', component: CountryStatsComponent},
  {path: 'expert', component: ExpertComponent},
  {path: '', redirectTo: '/countries', pathMatch: 'full'},
  {path: '**', redirectTo: '/countries', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryLanguagesComponent,
    CountryStatsComponent,
    ExpertComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [CountryService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
