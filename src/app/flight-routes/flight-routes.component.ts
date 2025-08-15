import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component'; // 👈 ez kell!
import { RouteCardComponent } from './route-card/route-card.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-flight-routes',
  standalone: true,
  imports: [HeroSectionComponent, RouteCardComponent, FooterComponent], // 👈 itt regisztráljuk
  templateUrl: './flight-routes.component.html',
  styleUrl: './flight-routes.component.css'
})
export class FlightRoutesComponent {

}
