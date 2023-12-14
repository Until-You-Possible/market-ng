import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NewsService} from "./service/news/news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Market';
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  dataList: any[] = [];
  cols = 3;
  minWidth = 260; // 子组件的最小宽度

  constructor(private observer: BreakpointObserver,
              private cdr: ChangeDetectorRef,
              private apiNews: NewsService,
  private breakpointObserver: BreakpointObserver
  ) {
    // 创建50条数据示例
    for (let i = 1; i <= 50; i++) {
      this.dataList.push({
        title: `Title ${i}`,
        subTitle: `Sub Title ${i}`,
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        description: `Description ${i}`
      });
    }
  }

  ngOnInit(): void {

    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small])
      .subscribe(result => {
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 3;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = 2;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = 1;
        }
      });
    }

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
      this.apiNews.initArticles().subscribe(res => {
        console.log("res", res);
      });
  }

}
