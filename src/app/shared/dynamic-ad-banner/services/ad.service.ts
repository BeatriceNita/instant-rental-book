import { Injectable } from '@angular/core';
import { AdHolidayComponent } from '../components/ad-holiday/ad-holiday.component';
import { AdItem } from '../entities/ad-item';

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      new AdItem(
        AdHolidayComponent,
        { headline: 'Want to spend your next month in paradise?',
          body: 'Head over to our website!'
        }
      ),
      new AdItem(
        AdHolidayComponent,
        { headline: 'Do you want to have a quick getaway this weekend?',
          body: "Don't miss this opportunity!"
        }
      ),
      new AdItem(
        AdHolidayComponent,
        { headline: 'Are you ready for this amazing adventure?',
          body: 'Contact us to get more details!'
        }
      )
    ];
  }
}
