import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';
import { state } from 'shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    CommonModule,
    RouterLinkWithHref,
    RouterOutlet
  ],
  template: `
  <div class="menu">
    <a routerLink="home">Home</a>
    <a routerLink="mfe1">Flights</a>
    <a routerLink="about">About</a>
  </div>
  <main>
    <router-outlet></router-outlet>
  </main>
  `,
  styles: [`

    .menu {
      background-color: black;
      padding:20px;
    }

    .menu a {
      color: white;
      font-size: 18px;
      margin-right: 20px;
    }

    main {
      padding: 20px;
    }
  `]
})
export class AppComponent {
  count = 0;

  constructor() {
    state.userName = 'Jane Doe';
  }
}
