import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/common/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  public pageSize = 10;
  public page = 1;
  public totalLength: any;

  countries: Country | any;

  constructor(private countryService: CountryService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
    this.getCountries();
  });
}

  private getCountries(){
    this.countryService.getCountryList().subscribe(
          data => {
            this.countries = data;
          });
  }

  // showCountryDetails() {

  //   const theConId: number =+this.route.snapshot.paramMap.get('id');

  //   this.countryService.getCountryDetails(theConId).subscribe(
  //     data => {
  //       this.countries = data;
  //     })
  // }
}

