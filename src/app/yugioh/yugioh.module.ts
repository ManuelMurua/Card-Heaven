import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YugiohPageRoutingModule } from './yugioh-routing.module';

import { YugiohPage } from './yugioh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YugiohPageRoutingModule
  ],
  declarations: [YugiohPage]
})
export class YugiohPageModule {}
