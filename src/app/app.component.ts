import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <p> Hello, this is Angular, Vite </p>
    <a routerLink="/" href="#" class="text-xl font-bold no-underline hover:underline ...">Home | </a>
    <a routerLink="/about" href="#" class="text-xl font-bold no-underline hover:underline ...">About us</a>
    <hr>
    <router-outlet></router-outlet>
  `,
  providers: [RouterOutlet, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {}

  ngOnInit(): void {}
}
