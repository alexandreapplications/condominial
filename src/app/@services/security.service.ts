import { Injectable } from '@angular/core';
import { SubscribeViewModel } from '../@models/@security/subscribeViewModel';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../@models/@security/userModel';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  // Load Chance
  ChanceModule = require('chance');

  // Instantiate Chance so it can be used
  chance = new this.ChanceModule();

  constructor(private _http: HttpClient) { }

  doCreateSubscription(_subscribeData: SubscribeViewModel): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // Verify if the e-mail isn't already registered.
      // this._http.get('{appSecurity}/users/')
      const id = this.chance.guid();
      const userModel: UserModel = {
        id: id,
        login: _subscribeData.email,
        birthDate: _subscribeData.birthDate,
        country: _subscribeData.country,
        name: _subscribeData.name,
        subscribeDate: new Date(),
        personId: null
      };
      this._http.get<Array<UserModel>>(`{appSecurity}/users/?login=${ _subscribeData.email }`).toPromise()
        .then(response => {
          if (response.length === 0) {
            this._http.post('{appSecurity}/users/', userModel).toPromise().then(x => {
              resolve(true);
            }).catch(error => {
              reject(error);
            });
          } else {
            reject('User already exists');
          }
        }).catch(error => {
          reject(error);
        });
      });
  }
}
