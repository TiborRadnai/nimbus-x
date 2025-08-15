import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component'; // 👈 ez kell!
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-fleet',
  standalone: true,  
  imports: [HeroSectionComponent, CommonModule, FooterComponent],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.css'
})
export class FleetComponent {
  fleet = [
    {
      name: 'Cessna 172 Skyhawk (Dean)',
      image: '/assets/fleet/cessnaSkyhawk1.jpg',
      description: 'Our go-to aircraft for scenic tours. Comfortable, safe, and equipped with modern avionics — Dean delivers smooth flights and stunning views every time.'
    },
    {
      name: 'Cessna 172 Skyhawk (Alice)',
      image: '/assets/fleet/cessnaSkyhawk2.jpg',
      description: 'A stable-performance aircraft equipped with modern avionics. Its comfortable cabin and instrumentation support the safe execution of night flights.'
    },
    {
      name: 'Cirrus SR22T (Crissy)',
      image: '/assets/fleet/cirrus.jpg',
      description: 'The youngest and most advanced member of our fleet. Distinguished by outstanding performance, premium equipment, and elegant design. Crissy is a true gem in the world of private aviation.'
    },
    {
      name: 'Cessna 208B Grand Caravan EX (Big Girl)',
      image: '/assets/fleet/cessnaCaravan1.jpg',
      description: 'A high-capacity, reliable aircraft operating our scheduled Porto Santo route. Its stable performance and spacious cabin make it ideal for regular service.'
    },
    {
      name: 'Cessna 208 Grand Caravan (Jumper)',
      image: '/assets/fleet/cessnaCaravan2.jpg',
      description: 'A specially modified aircraft for tandem skydiving operations. Its spacious interior and adapted configuration enable safe and efficient parachute deployment.'
    }
  ];
}
