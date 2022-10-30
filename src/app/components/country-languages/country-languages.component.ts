import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Language } from 'src/app/common/language';
import { Country } from 'src/app/common/country';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.css']
})
export class CountryLanguagesComponent implements OnInit {

  languages: Language | any;

  constructor(private languageService: LanguageService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.showCountryLanguages();
    })
  }

  showCountryLanguages() {

    const theCountryId = +this.route.snapshot.paramMap.get('id')!;
    //console.log(this.theCountryId);
   
    this.languageService.getLanguageList(theCountryId).subscribe(
      data => {
        this.languages = data;
      })
  }

}

