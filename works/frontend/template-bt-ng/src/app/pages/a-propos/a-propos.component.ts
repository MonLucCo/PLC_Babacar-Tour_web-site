import { Component } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  standalone: false,
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.scss'
})
export class AProposComponent {
  babacar = {
    nom: 'Babacar Tour',
    description: `Je suis Babacar, chauffeur-guide indépendant basé au Sénégal. Passionné par mon pays, je propose des excursions authentiques, des circuits culturels et des transferts personnalisés pour vous faire découvrir le Sénégal avec le cœur.`,
    citation: `“Voyager avec moi, c’est découvrir le Sénégal avec le cœur.”`,
    photo: 'assets/images/babacar.jpg',
    facebook: {
      abonnes: 80,
      lien: 'https://www.facebook.com/p/Babacar-Guide-au-S%C3%A9n%C3%A9gal-100063878642804'
    }
  };
}

