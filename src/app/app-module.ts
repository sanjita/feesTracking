import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { Dasboard } from './pages/dasboard/dasboard';
import { MasterList } from './pages/master-list/master-list';
import { InstituteMasterList } from './pages/institute-master-list/institute-master-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    Dasboard,
    MasterList,
    InstituteMasterList
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
