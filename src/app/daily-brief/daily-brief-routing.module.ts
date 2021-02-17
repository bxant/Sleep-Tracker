import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyBriefPage } from './daily-brief.page';

const routes: Routes = [
  {
    path: '',
    component: DailyBriefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyBriefPageRoutingModule {}
