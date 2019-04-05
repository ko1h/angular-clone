import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TheLastestComponent } from './the-lastest/the-lastest.component';

const appRoutes: Routes = [
  {
   path: '',
   component: WelcomeComponent
 },
  {
  path: "the-lastest",
  component: TheLastestComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
