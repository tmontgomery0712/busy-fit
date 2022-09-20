import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EntriesComponent } from './components/entries/entries.component';
import { LogEntryComponent } from './components/log-entry/log-entry.component';


@NgModule({
  declarations: [
    HomeComponent,
    EntriesComponent,
    LogEntryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
