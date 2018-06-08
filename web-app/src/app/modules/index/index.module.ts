import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from "../share/share.module";
import { routing } from "./index.route";
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    routing
  ],
  declarations: [
    IndexComponent
  ]
})
export class IndexModule { }
