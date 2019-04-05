import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
      path: '',
      component: MainComponent
    },
    {
    path: 'admin',
    component: AdminComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
