import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {

    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'yugioh',
    loadChildren: () => import('./yugioh/yugioh.module').then( m => m.YugiohPageModule)
  },
  {
    path: 'magic',
    loadChildren: () => import('./magic/magic.module').then( m => m.MagicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
