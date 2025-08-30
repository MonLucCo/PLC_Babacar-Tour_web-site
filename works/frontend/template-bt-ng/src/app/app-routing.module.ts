import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';
import { ColorSwatchComponent } from './shared/color-swatch/color-swatch.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { Erreur404Component } from './pages/erreur-404/erreur-404.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { TarifsComponent } from './pages/tarifs/tarifs.component';
import { ReserverComponent } from './pages/reserver/reserver.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  { path: 'style-guide', component: StyleGuideComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'prestations', component: PrestationsComponent },
  { path: 'circuits', component: CircuitsComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'reserver', component: ReserverComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'erreur-404', component: Erreur404Component },
  { path: '**', redirectTo: '/erreur-404' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
