import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading, PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {path: "", redirectTo: "index", pathMatch: "full"},
    {path: "index", component: AppComponent},
    {path: "moduleOne", loadChildren: "./modules/module-one/module-one.module#ModuleOneModule"},
    {path: "moduleTwo", loadChildren: "./modules/module-two/module-two.module#ModuleTwoModule"},
];

export const routing = RouterModule.forRoot(routes, {
    initialNavigation: false,
    preloadingStrategy: NoPreloading, //NoPreloading
    // useHash: true,
})