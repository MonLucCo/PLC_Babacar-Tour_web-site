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
    description: `Babacar est un chauffeur-guide indépendant basé au Sénégal. Il propose des excursions authentiques, des circuits culturels et des transferts personnalisés.`,
    citation: `“Voyager avec Babacar, c’est découvrir le Sénégal avec le cœur.” – Client`,
    facebook: {
      abonnes: 80,
      lien: 'https://www.facebook.com/people/Babacar-Tour%C3%A9/100052203122121/'
    }
  };
}
