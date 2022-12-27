import "@angular/compiler";
import "zone.js";
import './index.css';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
