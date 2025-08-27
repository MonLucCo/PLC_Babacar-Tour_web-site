import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';
import { ColorSwatchComponent } from './shared/color-swatch/color-swatch.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { Erreur404Component } from './pages/erreur-404/erreur-404.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'style-guide', component: StyleGuideComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'erreur-404', component: Erreur404Component },
  { path: '**', redirectTo: '/erreur-404' } // Redirect any unknown paths to the home page,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
