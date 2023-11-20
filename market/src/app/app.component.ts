import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {NewsService} from "./service/news/news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Market';
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
              private cdr: ChangeDetectorRef,
              private apiNews: NewsService
  ) {}

  ngAfterViewInit(): void {
      this.sideNav.opened = true;
      this.observer.observe(['(max-width: 787px)']).subscribe(res => {
        if (res.matches) {
          this.sideNav.mode = 'over';
          this.sideNav.close().then(() => console.log('Sidenav closed'));
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open().then(() => console.log('Sidenav opened'));
        }
      });
      this.cdr.detectChanges();
      this.apiNews.initSources();
  }
}
