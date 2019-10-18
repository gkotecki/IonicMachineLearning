import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-info',
        children: [
          {
            path: '',
            loadChildren: '../tab-info/tab-info.module#TabInfoPageModule'
          }
        ]
      },
      {
        path: 'tab-camera',
        children: [
          {
            path: '',
            loadChildren: '../tab-camera/tab-camera.module#TabCameraPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
