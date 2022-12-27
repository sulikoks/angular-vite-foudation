import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(c => c.HomeModule) },
    { path: 'about', pathMatch: 'full', loadChildren: () => import('./about/about.module').then(c => c.AboutModule) },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
