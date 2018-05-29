import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyLazyRoutingModule } from './my-lazy-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { SlowComponent } from './slow/slow.component';
import { LazyGuardGuard } from './lazy-guard.guard';
import { QuitLazyComponent } from './quit-lazy/quit-lazy.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  imports: [
    CommonModule,
    MyLazyRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [QuitLazyComponent],
  declarations: [SlowComponent, QuitLazyComponent, InnerComponent],
  providers: [LazyGuardGuard]
})
export class MyLazyModule { }
