/* core */
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Http, HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
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

/* Services */
import { GetBlobService } from './services/get-blob.service';

@NgModule({
    imports: [
        /* Core */
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
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
        HttpClientModule,
        /* END */
        CurrencyMaskModule,
        /* components */

        /* directive */
        SelfModelValueDirective,
        /* pipe */
    ],
    providers: [
        {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},
    ]
})

export class ShareModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareModule,
            providers: [
                GetBlobService
            ],
        }
    }
}