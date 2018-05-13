import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ShareModule } from "./modules/share/share.module";
import { routing } from './app.route';

/* Interceptor */
import { HttpHandleService } from "./interceptor/http-interceptor/http-handle.service";
import { httpFactory } from "./interceptor/http-interceptor/http.factory";
/* END */

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
    HttpModule,
    /* Translate */
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
    }),
    /* END */
    ShareModule.forRoot(),
    routing,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    HttpHandleService,
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, HttpHandleService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
