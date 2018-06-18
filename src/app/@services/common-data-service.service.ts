import { Injectable } from '@angular/core';
import { CountryModel } from '../@models/@common/countryModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProcessResponseModel } from '../@models/@common/processResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CommonDataServiceService {

  constructor(private _http: HttpClient) { }

  public GetAllCountries(): Promise<Array<CountryModel>> {
    const countryCache = 'countryList';
    return new Promise<Array<CountryModel>>((resolve, reject) => {
      const countryData = localStorage.getItem(countryCache);
      if (countryData != null) {
        const data = Object.assign(new Array<CountryModel>(), JSON.parse(countryData));
        resolve(data);
        return;
      }
      this._http.get<Array<CountryModel>>('{cep}?fields=name;alpha3Code;flag').toPromise()
        .then(x => {
          localStorage.setItem(countryCache, JSON.stringify(x));
          resolve(x);
        }).catch(error => {
          if (error instanceof HttpErrorResponse) {
            reject(new ProcessResponseModel('ErrorResponse', [error.message], [], error));
          } else {
            reject(new ProcessResponseModel('UnidentifiedError', ['Unidentified error'], []));
          }
        });
    });
  }
}
