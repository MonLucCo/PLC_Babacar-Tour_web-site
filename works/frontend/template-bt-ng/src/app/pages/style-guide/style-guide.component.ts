import { Component } from '@angular/core';

@Component({
  selector: 'app-style-guide',
  standalone: false,
  templateUrl: './style-guide.component.html',
  styleUrl: './style-guide.component.scss'
})
export class StyleGuideComponent {
  // Pour la section Typographie
  headings = [
    { tag: 'h1', label: 'H1 – Titre principal' },
    { tag: 'h2', label: 'H2 – Titre secondaire' },
    { tag: 'h3', label: 'H3 – Section' }
  ];

  // Pour la section Boutons
  buttonVariants = [
    'btn-primary',
    'btn-secondary',
    'btn-outline-primary',
    'btn-link',
    'btn-link disabled',
    'btn-primary disabled'
  ];
}
