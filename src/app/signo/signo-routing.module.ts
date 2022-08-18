import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignoPage } from './signo.page';

const routes: Routes = [
  {
    path: '',
    component: SignoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignoPageRoutingModule {}
