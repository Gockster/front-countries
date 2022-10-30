import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/common/country';
import { Second } from 'src/app/common/second';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {

  second: Second | any;
  public pageSize = 10;
  public page = 1;
  public totalLength: any;

  constructor(private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getResults();
    });
  }
  getResults() {
    this.countryService.getResultList().subscribe(
      data => {
        this.second = data;
      });
  }

}
