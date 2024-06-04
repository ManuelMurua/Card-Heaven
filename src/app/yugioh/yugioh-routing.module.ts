import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YugiohPage } from './yugioh.page';

const routes: Routes = [
  {
    path: '',
    component: YugiohPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YugiohPageRoutingModule {}
