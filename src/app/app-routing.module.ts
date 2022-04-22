import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'persondetails',
    loadChildren: () => import('./pages/person-details/person-details.module').then( m => m.PersondetailsPageModule)
  },
  {
    path: 'planetdetails',
    loadChildren: () => import('./pages/planet-details/planet-details.module').then( m => m.PlanetdetailsPageModule)
  },
  {
    path: 'person',
    loadChildren: () => import('./pages/person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'person-details',
    loadChildren: () => import('./pages/person-details/person-details.module').then( m => m.PersonDetailsPageModule)
  },
  {
    path: 'planet-details',
    loadChildren: () => import('./pages/planet-details/planet-details.module').then( m => m.PlanetDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
