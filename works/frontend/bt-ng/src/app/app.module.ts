import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { MobileSidebarComponent } from './components/mobile-sidebar/mobile-sidebar.component';
import { StyleGuideComponent } from './pages/style-guide/style-guide.component';
import { ColorSwatchComponent } from './shared/color-swatch/color-swatch.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { Erreur404Component } from './pages/erreur-404/erreur-404.component';
import { FooterComponent } from './components/footer/footer.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PageConstructionComponent } from './shared/page-construction/page-construction.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { CircuitsComponent } from './pages/circuits/circuits.component';
import { TarifsComponent } from './pages/tarifs/tarifs.component';
import { ReserverComponent } from './pages/reserver/reserver.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionComponent,
    CardComponent,
    HomeComponent,
    MobileSidebarComponent,
    StyleGuideComponent,
    ColorSwatchComponent,
    AProposComponent,
    Erreur404Component,
    FooterComponent,
    MentionsLegalesComponent,
    PageConstructionComponent,
    ContactComponent,
    PrestationsComponent,
    CircuitsComponent,
    TarifsComponent,
    ReserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
