import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogEntryComponent } from './pages/home/components/log-entry/log-entry.component';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'log/:id',
    component: LogEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
