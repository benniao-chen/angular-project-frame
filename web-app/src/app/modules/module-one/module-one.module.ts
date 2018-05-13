import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { routing } from "./module-one.route";
import { ModuleOneComponentComponent } from "./module-one-component/module-one-component.component";

@NgModule({
    imports: [
        ShareModule,
        routing
    ],
    declarations: [
        ModuleOneComponentComponent,
    ],
    exports: [
        
    ],
    providers: [
        
    ]
})

export class ModuleOneModule {

}