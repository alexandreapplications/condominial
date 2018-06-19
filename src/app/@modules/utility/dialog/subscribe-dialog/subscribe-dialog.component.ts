import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataServiceService } from '../../../../@services/common-data-service.service';
import { CountryModel } from '../../../../@models/@common/countryModel';
import { Observable } from 'rxjs';
import { SubscribeViewModel } from '../../../../@models/@security/subscribeViewModel';
import { SecurityService } from '../../../../@services/security.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'cadm-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.scss']
})
export class SubscribeDialogComponent implements OnInit {
  subscribeForm: FormGroup;
  allCountries: Array<CountryModel>;
  filteredOptions: Observable<CountryModel[]>;

  constructor(private _formBuilder: FormBuilder,
    private _commonDataService: CommonDataServiceService,
    private _securityService: SecurityService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SubscribeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createForm();
  }

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
  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.subscribeForm.valid) {
      const subscribeData: SubscribeViewModel = this.subscribeForm.value;
      this._securityService.doCreateSubscription(subscribeData).then(response => {
        if (response) {
          this._snackBar.open('You are now subscribed.', 'Confirmation', { duration: 2000 });
          this.dialogRef.close();
        }
      }).catch(error => {
        error.errors.forEach(element => {
          this._snackBar.open(element);
        });
      });
    }
  }

  filter(val: string): Array<CountryModel> {
    return this.allCountries.filter(option =>
      option.name.toLowerCase().includes(val.toLowerCase()));
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
