import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      title: 'Excursion Sahara',
      image: 'assets/images/sahara.png',
      description: 'Départ quotidien en 4x4 climatisé',
      icon: 'fa-map-marked-alt'
    },
    {
      title: 'Dîner nomade',
      image: 'assets/images/img-01.png',
      description: 'Repas traditionnel avec groupe de musique touareg',
      icon: 'fa-utensils'
    },
    {
      title: 'Guide francophone',
      image: 'assets/images/img-03.png',
      description: 'Accompagnement personnalisé sur les circuits',
      icon: 'fa-user'
    }
  ];
}
