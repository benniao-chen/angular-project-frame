import { Routes, RouterModule } from '@angular/router';
import { ModuleOneComponentComponent } from './module-one-component/module-one-component.component';

export const routes: Routes = [
    {path: "", component: ModuleOneComponentComponent}
]

export const routing = RouterModule.forChild(routes);