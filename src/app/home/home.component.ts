import { Component } from '@angular/core';
import { BrandBannerComponent } from '../brand-banner/brand-banner.component'; 
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';
import { RouteCardComponent } from '../flight-routes/route-card/route-card.component'; // 👈 új komponens
import { FlightRoutesComponent } from '../flight-routes/flight-routes.component'; // 👈 ha ezt is használod

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  
  HeroSectionComponent,
  BrandBannerComponent,
  CardComponent,
  FooterComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

}
