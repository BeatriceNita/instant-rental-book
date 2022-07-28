import { Component, OnInit } from '@angular/core';

import { AdItem, AdService } from '../../shared/dynamic-ad-banner/';

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
