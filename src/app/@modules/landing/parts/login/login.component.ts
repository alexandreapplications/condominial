import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../../../../@services/security.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cadm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private returnUrl: string;

  constructor(private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute,
    private _router: Router,
    private _security: SecurityService) {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this._formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logon() {
    if (this.loginForm.valid) {
      const login = this.loginForm.get('login').value;
      const password = this.loginForm.get('password').value;

      this._security.logon(login, password).then(x => {
        this._router.navigate([decodeURI(this.returnUrl)]);
      }).catch(error => {
        error.errors.forEach(element => {
          this._snackBar.open(element);
        });
      });
    }
  }
  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

}
