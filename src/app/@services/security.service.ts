import { Injectable } from '@angular/core';
import { SubscribeViewModel } from '../@models/@security/subscribeViewModel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../@models/@security/userModel';
import { ProcessResponseModel } from '../@models/@common/processResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  // Load Chance
  ChanceModule = require('chance');

  // Instantiate Chance so it can be used
  chance = new this.ChanceModule();

  userModel: UserModel;

  constructor(private _http: HttpClient) { }

  logon(login: string, senha: string): Promise<UserModel> {
    return new Promise<UserModel>((resolve, reject) => {
      this._http.get<Array<UserModel>>(`{appSecurity}/users/?login=${login}`).toPromise()
        .then(response => {
          if (response.length === 0) {
            reject(new ProcessResponseModel('UserAlreadyExist', ['User already exists']));
          } else {
            this.userModel = response[0];
            resolve(this.userModel);
          }
        }).catch(error => {
          reject(new ProcessResponseModel('ErrorResponse', [error.message], [], error));
        });
    });
  }

  get isAuthenticated(): boolean {
    return true;
  }

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
      this._http.get<Array<UserModel>>(`{appSecurity}/users/?login=${_subscribeData.email}`).toPromise()
        .then(response => {
          if (response.length === 0) {
            this._http.post('{appSecurity}/users/', userModel).toPromise().then(x => {
              resolve(true);
            }).catch(error => {
              if (error instanceof HttpErrorResponse) {
                reject(new ProcessResponseModel('ErrorResponse', [error.message], [], error));
              } else {
                reject(new ProcessResponseModel('UnidentifiedError', ['Unidentified error'], []));
              }
            });
          } else {
            reject(new ProcessResponseModel('UserAlreadyExist', ['User already exists']));
          }
        }).catch(error => {
          reject(error);
        });
    });
  }
}
