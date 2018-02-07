/* core */
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Http, HttpModule } from "@angular/http";
/* END */

/* Directive */
import { SelfModelValueDirective } from "./directives/selfModelValue.directive";
/* END */


@NgModule({
    imports: [
        /* Core */
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        /* END */
    ],
    declarations: [
        /* components */

        /* directive */
        SelfModelValueDirective,

        /* pipe */
    ],
    exports: [
        /* Core */
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        /* END */
        /* components */

        /* directive */
        SelfModelValueDirective,

        /* pipe */
    ],
    providers: [

    ]
})

export class ShareModule {

}