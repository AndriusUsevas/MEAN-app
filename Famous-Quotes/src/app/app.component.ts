import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Famous-Quotes';

  routeLinks:any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.routeLinks = [
        {
            label: 'Quote Generator',
            link: './quote-gen',
            index: 0
        }, {
            label: 'Favorite Quotes',
            link: './saved-quotes',
            index: 1
        },{
            label: 'My Quotes',
            link: './create-quote',
            index: 2
        }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  getActiveClass(indexOfRouteLink) {
    let tabsclass = 'mat-tab-link';
    if (this.activeLinkIndex === indexOfRouteLink) {
      tabsclass = 'mat-tab-link mat-tab-label-active';
    }
    return tabsclass;
  }






}
