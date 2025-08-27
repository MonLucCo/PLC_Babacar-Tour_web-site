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
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
