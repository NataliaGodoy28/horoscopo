import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignoPageRoutingModule } from './signo-routing.module';

import { SignoPage } from './signo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignoPageRoutingModule
  ],
  declarations: [SignoPage]
})
export class SignoPageModule {}
