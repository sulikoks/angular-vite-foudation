import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from "./about.component";
import { ErrorLoadComponent } from "./error-load.component";
import { loadRemoteModule } from "../core/federation";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './App',
      }).then((esm) => esm.AppComponent),
  },
];
