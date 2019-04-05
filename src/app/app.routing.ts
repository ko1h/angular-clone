import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TheLastestComponent } from './the-lastest/the-lastest.component';
import { AdminComponent } from './admin/admin.component';
const appRoutes: Routes = [
  {
   path: '',
   component: WelcomeComponent
 },
  {
  path: "the-lastest",
  component: TheLastestComponent
  },
  {
  path: "admin",
  component: AdminComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
