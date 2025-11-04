import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Dasboard } from './pages/dasboard/dasboard';
import { MasterList } from './pages/master-list/master-list';
import { InstituteMasterList } from './pages/institute-master-list/institute-master-list';

const routes: Routes = [
  {'path':'', redirectTo:'/login',pathMatch:'full'},
{'path':'login',component:Login},
{'path':'dashboard',component:Dasboard},
{'path':'masterlist',component:MasterList},
{'path':'instmaster',component:InstituteMasterList}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
