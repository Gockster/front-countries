import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { Component, OnInit } from '@angular/core';
import { Expert } from 'src/app/common/expert';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  expert: Expert | any;
  public pageSize = 10;
  public page = 1;
  public totalLength: any;

  constructor(private countryService: CountryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.searchExpert();
    });
  }

  searchExpert() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    const searchMode: boolean = this.route.snapshot.paramMap.has('keyword');
    if (searchMode) {
      this.countryService.searchExpert(theKeyword).subscribe(
        data => {
          this.expert = data;
        });
    }
    else {
      this.countryService.getData().subscribe(
        data => {
          this.expert = data;
        });
    }
  }
}
