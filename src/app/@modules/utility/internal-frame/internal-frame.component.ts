import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../@services/security.service';

@Component({
  selector: 'cadm-internal-frame',
  templateUrl: './internal-frame.component.html',
  styleUrls: ['./internal-frame.component.scss']
})
export class InternalFrameComponent implements OnInit {

  constructor(private _security: SecurityService) { }

  logout() {
    this._security.logout();
  }

  ngOnInit() {
  }

}
