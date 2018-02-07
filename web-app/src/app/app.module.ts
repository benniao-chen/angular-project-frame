import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from "@angular/http";
import { ShareModule } from "./modules/share/share.module";

/* Translate */
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './i18n', '.json');
}
/* END */

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    /* Translate */
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
    }),
    /* END */
    ShareModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
