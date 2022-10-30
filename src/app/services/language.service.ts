import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../common/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private baseUrl = 'http://localhost:8080/countries';

  constructor(private httpClient: HttpClient) { }
  
  getLanguageList(theCountryId: number): Observable<Language> {
    const languageUrl = `${this.baseUrl}/languages/${theCountryId}`;

    return this.httpClient.get<Language>(languageUrl);
      
    
  }

 
}
