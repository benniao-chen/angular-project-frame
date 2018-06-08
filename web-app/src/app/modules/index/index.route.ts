import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    {path: "", component: IndexComponent, children: [
        {path: "ModuleOne", loadChildren: "../module-one/module-one.module#ModuleOneModule"},
        {path: "ModuleTwo", loadChildren: "../module-two/module-two.module#ModuleTwoModule"},
    ]},
]

export const routing = RouterModule.forChild(routes);