import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { AdDirective } from '../../directives/ad.directive';
import { AdItem } from '../../entities/ad-item';
import { Advert } from '../../entities/advert';


@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  interval!: ReturnType<typeof setInterval>;
  currentAdIndex = -1;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<Advert>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }
}
