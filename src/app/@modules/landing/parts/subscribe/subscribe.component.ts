import { map, startWith } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataServiceService } from '../../../../@services/common-data-service.service';
import { CountryModel } from '../../../../@models/@common/countryModel';
import { Observable } from 'rxjs';
import { SubscribeViewModel } from '../../../../@models/@security/subscribeViewModel';
import { SecurityService } from '../../../../@services/security.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cadm-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  allCountries: Array<CountryModel>;
  filteredOptions: Observable<CountryModel[]>;

  constructor(private _formBuilder: FormBuilder,
    private _commonDataService: CommonDataServiceService,
    private _securityService: SecurityService,
    private _snackBar: MatSnackBar) {
    this.createForm();
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

  filter(val: string): Array<CountryModel> {
    return this.allCountries.filter(option =>
      option.name.toLowerCase().includes(val.toLowerCase()));
  }

  doSubscribeForm() {
    if (this.subscribeForm.valid) {
      const subscribeData: SubscribeViewModel = this.subscribeForm.value;
      this._securityService.doCreateSubscription(subscribeData).then(response => {
        if (response) {
          this._snackBar.open('You are now subscribed.', 'Confirmation', { duration: 1000 });
        }
      }).catch(error => {

      });
    }
  }

  ngOnInit() {
    this._commonDataService.GetAllCountries().then(x => {
      this.allCountries = x;
      this.filteredOptions = this.subscribeForm.get('country').valueChanges
        .pipe(
          startWith(''),
          map(val => this.filter(val))
        );
    });
  }
}
