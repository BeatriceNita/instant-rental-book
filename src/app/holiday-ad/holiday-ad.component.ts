import { Component, Input } from '@angular/core';

import { Advert } from '../entities/advert';

@Component({
  selector: 'app-holiday-ad',
  templateUrl: './holiday-ad.component.html',
  styleUrls: ['./holiday-ad.component.css']
})
export class HolidayAdComponent implements Advert {
  @Input() data: any;
}
