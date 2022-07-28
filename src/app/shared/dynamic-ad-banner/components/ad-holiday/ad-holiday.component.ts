import { Component, Input } from '@angular/core';

import { Advert } from '../../../dynamic-ad-banner/';

@Component({
  selector: 'app-ad-holiday',
  templateUrl: './ad-holiday.component.html',
  styleUrls: ['./ad-holiday.component.css']
})
export class AdHolidayComponent implements Advert {
  @Input() data: any;
}
