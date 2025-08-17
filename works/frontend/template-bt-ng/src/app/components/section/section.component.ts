import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: false,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() bgColor = '#f8f9fa';
  @Input() padding = '2rem';
}
