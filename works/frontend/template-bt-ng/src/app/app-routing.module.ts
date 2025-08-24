import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';
import { ColorSwatchComponent } from './shared/color-swatch/color-swatch.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'styleguide', component: StyleGuideComponent },
  { path: '**', redirectTo: '/accueil' } // Redirect any unknown paths to the home page,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
