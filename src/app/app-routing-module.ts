import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Dasboard } from './pages/dasboard/dasboard';
import { MasterList } from './pages/master-list/master-list';
import { PackageMasterList } from './pages/package-master-list/package-master-list';
import { Institute } from './pages/institute/institute';
import { Branch } from './pages/branch/branch';
import { Course } from './pages/course/course';
import { Student } from './pages/student/student';
import { Layout } from './pages/layout/layout';

const routes: Routes = [
  { 'path': '', redirectTo: '/login', pathMatch: 'full' },
  { 'path': 'login', component: Login },
  {
    'path': '',
    component: Layout,
    children: [
       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      //{ 'path': '', component: Dasboard },
      { 'path': 'dashboard', component: Dasboard },
      { 'path': 'masterlist', component: MasterList },
      { 'path': 'packageM', component: PackageMasterList },
      { 'path': 'institute', component: Institute },
      { 'path': 'branch', component: Branch },
      { 'path': 'course', component: Course },
      { 'path': 'enrollment', component: Student }

    ]

  },











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
