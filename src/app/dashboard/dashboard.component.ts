import { Component, OnInit } from '@angular/core';

import { AdItem } from '../entities/ad-item';
import { AdService } from '../services/ad.service';

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
