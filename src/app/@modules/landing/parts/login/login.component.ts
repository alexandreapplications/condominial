import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cadm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this._formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
