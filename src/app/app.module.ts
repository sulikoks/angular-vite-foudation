import { LOCALE_ID, NgModule } from '@angular/core';
import { NgZone } from '@angular/core';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    {
      provide: NgZone,
      useValue: new NgZone({ shouldCoalesceEventChangeDetection: false })
    },
  ]
})
export class AppModule {}
