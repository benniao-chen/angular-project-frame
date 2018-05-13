import { Routes, RouterModule } from '@angular/router';
import { ModuleTwoComponentComponent } from './module-two-component/module-two-component.component';

export const routes: Routes = [
    {path: "", component: ModuleTwoComponentComponent}
]

export const routing = RouterModule.forChild(routes);