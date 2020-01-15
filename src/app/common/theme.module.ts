import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const COMMON = [];

@NgModule({
  declarations: [],
  exports: [...COMMON],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ]
})
export class ThemeModule { }
