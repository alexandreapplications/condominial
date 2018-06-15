import { Injectable } from '@angular/core';
import { CountryModel } from '../@models/@common/countryModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonDataServiceService {

  constructor(private _http: HttpClient) { }

  public GetAllCountries(): Promise<Array<CountryModel>> {
    return this._http.get<Array<CountryModel>>('{cep}?fields=name;alpha3Code;flag').toPromise();
    // return this._http.get<Array<CountryModel>>('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;flag').toPromise();
  }
}
