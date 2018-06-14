import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cadm-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.subscribeForm = this._formBuilder.group({
      name: ['', Validators.required, Validators.minLength(8)],
      email: ['', Validators.email, Validators.required],
      birthDate: [new Date(), Validators.required]
    });
  }
  ngOnInit() {
  }

}
