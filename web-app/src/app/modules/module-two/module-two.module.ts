import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { routing } from "./module-two.route";
import { ModuleTwoComponentComponent } from "./module-two-component/module-two-component.component";

@NgModule({
    imports: [
        ShareModule,
        routing
    ],
    declarations: [
        ModuleTwoComponentComponent,
    ],
    exports: [
        
    ],
    providers: [
        
    ]
})

export class ModuleTwoModule {

}