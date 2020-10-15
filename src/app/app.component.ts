import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url = '/devices';
  title = 'iphone screen';
  iphone = [
    {
      device: [
        {
          name: '12 Pro Max',
        },
      ],
      type: 'OLED',
      inch: 6.7,
      ppi: 458,
      physical: {
        x: 1284,
        y: 2778,
      },
      scale: 3,
      downsacle: null,
      rendered: {
        x: 1284,
        y: 2778,
      },
      point: {
        x: 1284 / 3,
        y: 2778 / 3,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: '11 Pro Max',
        },
        {
          name: 'XS Max',
        },
      ],
      type: 'OLED',
      inch: 6.5,
      ppi: 458,
      physical: {
        x: 1242,
        y: 2688,
      },
      scale: 3,
      downsacle: null,
      rendered: {
        x: 1242,
        y: 2688,
      },
      point: {
        x: 1242 / 3,
        y: 2688 / 3,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: '11',
        },
        {
          name: 'XR',
        },
      ],
      type: 'LCD',
      inch: 6.1,
      ppi: 326,
      physical: {
        x: 828,
        y: 1792,
      },
      scale: 2,
      downsacle: null,
      rendered: {
        x: 828,
        y: 1792,
      },
      point: {
        x: 828 / 2,
        y: 1792 / 2,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: '12 Pro',
        },
        {
          name: '12',
        },
      ],
      type: 'OLED',
      inch: 6.1,
      ppi: 460,
      physical: {
        x: 1170,
        y: 2532,
      },
      scale: 3,
      downsacle: null,
      rendered: {
        x: 1170,
        y: 2532,
      },
      point: {
        x: 1170 / 3,
        y: 2532 / 3,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: '11 Pro',
        },
        {
          name: 'XS',
        },
        {
          name: 'X',
        },
      ],
      type: 'OLED',
      inch: 5.8,
      ppi: 458,
      physical: {
        x: 1125,
        y: 2436,
      },
      scale: 3,
      downsacle: null,
      rendered: {
        x: 1125,
        y: 2436,
      },
      point: {
        x: 1125 / 3,
        y: 2436 / 3,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: '12 mini',
        },
      ],
      type: 'OLED',
      inch: 5.4,
      ppi: 476,
      physical: {
        x: 1080,
        y: 2340,
      },
      scale: 3,
      downsacle: null,
      rendered: {
        x: 1080,
        y: 2340,
      },
      point: {
        x: 1080 / 3,
        y: 2340 / 3,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: '8/7/6s/6 Plus',
        },
      ],
      type: 'LCD',
      inch: 5.5,
      ppi: 401,
      square: true,
      physical: {
        x: 1080,
        y: 1920,
      },
      scale: 3,
      downsacle: null,
      rendered: {
        x: 1242,
        y: 2208,
      },
      point: {
        x: 1242 / 3,
        y: 2208 / 3,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: 'SE2/8/7/6s/6',
        },
      ],
      type: 'LCD',
      inch: 4.7,
      ppi: 326,
      square: true,
      physical: {
        x: 750,
        y: 1334,
      },
      scale: 2,
      downsacle: null,
      rendered: {
        x: 750,
        y: 1334,
      },
      point: {
        x: 750 / 2,
        y: 1334 / 2,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
    {
      device: [
        {
          name: 'SE/5c/5s/5',
        },
      ],
      type: 'LCD',
      inch: 4,
      ppi: 326,
      square: true,
      physical: {
        x: 640,
        y: 1136,
      },
      scale: 2,
      downsacle: null,
      rendered: {
        x: 640,
        y: 1136,
      },
      point: {
        x: 640 / 2,
        y: 1136 / 2,
      },
      show: {
        x: 0,
        y: 0,
      },
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url = event.urlAfterRedirects;
        switch (event.urlAfterRedirects) {
          case '/physical':
          case '/sizes':
            for (const series of this.iphone) {
              series.show.x = (series.physical.x / series.ppi) * 30;
              series.show.y = (series.physical.y / series.ppi) * 30;
            }
            break;
          case '/points':
            for (const series of this.iphone) {
              series.show.x = series.point.x / 5;
              series.show.y = series.point.y / 5;
            }
            break;
          case '/rendered':
            for (const series of this.iphone) {
              series.show.x = (series.point.x / 5 / 3) * series.scale;
              series.show.y = (series.point.y / 5 / 3) * series.scale;
            }
            break;
        }
      });
  }
}
