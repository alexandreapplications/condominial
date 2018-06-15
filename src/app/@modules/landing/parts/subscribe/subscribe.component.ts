import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataServiceService } from '../../../../@services/common-data-service.service';
import { CountryModel } from '../../../../@models/@common/countryModel';

@Component({
  selector: 'cadm-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  allCountries: Array<CountryModel>;

  constructor(private _formBuilder: FormBuilder, private _commonDataService: CommonDataServiceService) {
    this.createForm();
    this._commonDataService.GetAllCountries().then(x => {
      this.allCountries = x;
    });
  }
// https://restcountries.eu/rest/v2/name/br?fields=name;alpha3Code;iso639_1;flag
  private createForm() {
    this.subscribeForm = this._formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      birthDate: [new Date(), Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }
  ngOnInit() {
  }

}
