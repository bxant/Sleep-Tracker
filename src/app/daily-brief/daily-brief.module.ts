import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyBriefPageRoutingModule } from './daily-brief-routing.module';

import { DailyBriefPage } from './daily-brief.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyBriefPageRoutingModule
  ],
  declarations: [DailyBriefPage]
})
export class DailyBriefPageModule {}
