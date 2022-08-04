import { Component, OnInit } from '@angular/core';

import { AdItem } from 'src/app/shared/dynamic-ad-banner/entities/ad-item';
import { AdService } from 'src/app/shared/dynamic-ad-banner/services/ad.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService){}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
