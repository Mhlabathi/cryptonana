import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-info',
  imports: [RouterLink],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  countryService = inject(CountryService);
  loaderService = inject(LoaderService);

  country: any | null = null;
  currencies: any | null = null;

  async ngOnInit() {
    this.loaderService.show();
    const countryName = this.activatedRoute.snapshot.params['countryName'];
    // console.log(currencies);

    this.countryService.searchByCountryName(countryName).subscribe(
      (data) => {
        this.loaderService.hide();
        this.country = data;

        console.log(this.country);
        console.log(this.country[0].altSpellings[1]);
        let curency = this.country[0].currencies;
        this.currencies = Object.entries(curency);
        console.log(this.currencies);
      },
      (error) => {
        this.loaderService.hide();
      }
    );
  }
}
