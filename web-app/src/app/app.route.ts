import { NgModule } from "@angular/core";
import { Routes, RouterModule, NoPreloading, PreloadAllModules, PreloadingStrategy} from '@angular/router';


export const routes: Routes = [
    {path: "", redirectTo: "Index", pathMatch: "prefix"},
    {path: "Index", loadChildren: "./modules/index/index.module#IndexModule"},
];

export const routing = RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading, //NoPreloading
    // useHash: true,
})