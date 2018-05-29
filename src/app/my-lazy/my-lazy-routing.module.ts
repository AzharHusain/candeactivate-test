import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlowComponent } from './slow/slow.component';
import { LazyGuardGuard } from './lazy-guard.guard';

const routes: Routes = [
  {path: '',  redirectTo: 'slow', pathMatch: 'full'},
  {path: 'slow',  component: SlowComponent, canDeactivate: [LazyGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLazyRoutingModule { }
