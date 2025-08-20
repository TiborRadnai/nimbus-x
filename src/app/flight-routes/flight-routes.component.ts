import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component'; // 👈 ez kell!
import { PageTitleComponent } from '../page-title/page-title.component'; // 👈 ez kell!
import { RouteCardComponent } from './route-card/route-card.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-flight-routes',
  standalone: true,
  imports: [HeroSectionComponent, PageTitleComponent, RouteCardComponent, FooterComponent], // 👈 itt regisztráljuk
  templateUrl: './flight-routes.component.html',
  styleUrl: './flight-routes.component.css'
})
export class FlightRoutesComponent {

}
