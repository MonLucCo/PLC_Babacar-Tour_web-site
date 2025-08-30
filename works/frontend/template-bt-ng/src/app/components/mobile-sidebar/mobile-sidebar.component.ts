import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: false,
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss'
})
export class MobileSidebarComponent implements AfterViewInit {
  @ViewChild('closeBtn') closeBtnRef!: ElementRef<HTMLButtonElement>;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    // fermeture de la sidebar à chaque fin de navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeBtnRef.nativeElement.click();
      });
  }
}
