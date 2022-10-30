import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../common/country';
import { Language } from '../common/language';
import { Second } from '../common/second';
import { Expert } from '../common/expert';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private baseUrl = 'http://localhost:8080/countries';

  constructor(private httpClient: HttpClient) { }

  getCountryList(): Observable<Country> {

    return this.httpClient.get<Country>(this.baseUrl);

  }

  getResultList():Observable<Second> {
    const resultUrl = 'http://localhost:8080/second'

    return this.httpClient.get<Second>(resultUrl);
  }

  getData(): Observable<Expert>{
    const totalUrl = 'http://localhost:8080/expert';

    return this.httpClient.get<Expert>(totalUrl);
  }

  searchExpert(theKeyword: string): Observable<Expert> {
    const searchUrl = `http://localhost:8080/search/${theKeyword}`;

    return this.httpClient.get<Expert>(searchUrl);
  }
}
