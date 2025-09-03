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
      image: 'assets/images/img-06_400x400.jpg',
      description: 'Départ quotidien en 4x4 climatisé',
      icon: 'fa-map-marked-alt'
    },
    {
      title: 'Dîner nomade',
      image: 'assets/images/img-01_800x452.jpg',
      description: 'Repas traditionnel avec groupe de musique touareg',
      icon: 'fa-utensils'
    },
    {
      title: 'Guide francophone',
      image: 'assets/images/img-03_800x452.jpg',
      description: 'Accompagnement personnalisé sur les circuits',
      icon: 'fa-user'
    }
  ];
}
