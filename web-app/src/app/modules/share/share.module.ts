/* core */
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Http, HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
/* END */

/* Directive */
import { SelfModelValueDirective } from "./directives/self-model-value.directive";
/* END */
import { CurrencyMaskModule } from "./directives/ng2-currency-mask-master/currency-mask.module";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "./directives/ng2-currency-mask-master/currency-mask.config";
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    allowZero: true,
    decimal: ".",
    precision: 0,
    prefix: "",
    suffix: "",
    thousands: ","
};

@NgModule({
    imports: [
        /* Core */
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        /* END */
        CurrencyMaskModule,
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
        CurrencyMaskModule,
        /* components */

        /* directive */
        SelfModelValueDirective,
        /* pipe */
    ],
    providers: [
        {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig}
    ]
})

export class ShareModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareModule,
            providers: [

            ],
        }
    }
}