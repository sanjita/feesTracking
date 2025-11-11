import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { Dasboard } from './pages/dasboard/dasboard';
import { MasterList } from './pages/master-list/master-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Institute } from './pages/institute/institute';
import { PackageMasterList}from './pages/package-master-list/package-master-list';
import { Branch } from './pages/branch/branch';
import { Course } from './pages/course/course';
import { Student } from './pages/student/student'

@NgModule({
  declarations: [
    App,
    Dasboard,
    MasterList,
      Institute,
      PackageMasterList,
      Branch,
      Course,
      Student
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
