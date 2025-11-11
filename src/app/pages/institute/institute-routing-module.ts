import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Institute } from './institute';

const routes: Routes = [

  {'path':'institute', component:Institute}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule { }
