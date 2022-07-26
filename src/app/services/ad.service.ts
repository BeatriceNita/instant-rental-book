import { Injectable } from '@angular/core';

import { AdItem } from '../entities/ad-item';
import { HolidayAdComponent } from '../holiday-ad/holiday-ad.component';

@Injectable({providedIn: 'root'})
export class AdService {
  getAds() {
    return [
      new AdItem(
        HolidayAdComponent,
        { headline: 'Want to spend your next month in paradise?',
          body: 'Head over to our website!'
        }
      ),
      new AdItem(
        HolidayAdComponent,
        { headline: 'Do you want to have a quick getaway this weekend?',
          body: "Don't miss this opportunity!"
        }
      ),
      new AdItem(
        HolidayAdComponent,
        { headline: 'Are you ready for this amazing adventure?',
          body: 'Contact us to get more details!'
        }
      )
    ];
  }
}
