import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  toggleSidebar() {
    const body = document.querySelector('body');
    body?.classList.toggle('sidebar-open');
  }
}
