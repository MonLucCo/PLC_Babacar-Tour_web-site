import { Component } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  standalone: false,
  templateUrl: './color-swatch.component.html',
  styleUrl: './color-swatch.component.scss'
})
export class ColorSwatchComponent {
  // Liste des clés qui correspondent à la map $cv-theme-colors
  colors = [
    { key: 'primary', hex: '#D2B48C' },
    { key: 'secondary', hex: '#A0522D' },
    { key: 'success', hex: '#3CB371' },
    { key: 'danger', hex: '#970000' },
    { key: 'info', hex: '#6B8E23' },
    { key: 'warning', hex: '#D97706' },
    { key: 'warning-light', hex: '#FFA500' },
    { key: 'light', hex: '#F5F5DC' },
    { key: 'dark', hex: '#2F4F4F' },
    { key: 'blue-mineral', hex: '#3C6E91' },
    { key: 'blue-sable', hex: '#4A90E2' },
    { key: 'blue-touareg', hex: '#2F5D8A' }
  ];
}
