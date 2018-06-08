import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { routing } from "./module-one.route";
import { ModuleOneComponentComponent } from "./module-one-component/module-one-component.component";
import { ModuleOneTwoComponentComponent } from './module-one-two-component/module-one-two-component.component';

@NgModule({
    imports: [
        ShareModule,
        routing
    ],
    declarations: [
        ModuleOneComponentComponent,
        ModuleOneTwoComponentComponent,
    ],
    exports: [
        
    ],
    providers: [
        
    ]
})

export class ModuleOneModule {

}