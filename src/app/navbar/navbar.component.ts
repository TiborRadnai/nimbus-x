import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var bootstrap: any; // 👉 Ez itt legyen, az importok után!

@Component({
  selector: 'app-navbar',
  standalone: true, // 👈 ezt add hozzá!
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  closeMenu(navbarNav: HTMLElement) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarNav);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  }
}

