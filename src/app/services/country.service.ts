import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  API: string = environment.api;

  countries = signal<any[]>([]);
  currencies = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${this.API}/all`);
  }

  setCountries(countries: any[]) {
    this.countries.set(countries);
  }

  searchByCountryName(name: string) {
    return this.http.get(`${this.API}/name/${name}`);
  }

  getCountryCurrency(currencies: any[]) {
    return this.http.get(`${this.API}/name/currency/${currencies}`);
  }

}
