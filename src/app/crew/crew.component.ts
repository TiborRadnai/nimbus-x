import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../hero-section/hero-section.component'; // 👈 ez kell!
import { PageTitleComponent } from '../page-title/page-title.component'; // 👈 ez kell!
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-crew',
  standalone: true,  
  imports: [HeroSectionComponent, PageTitleComponent, CommonModule, FooterComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {
  team = [
    {
      name: 'Carla Saradeth',
      role: 'Pilot',
      image: '/assets/crew/CarlaSaradeth.jpg',
      description: 'Young and talented pilot at our company. In her full-time role, she flies as a First Officer on the Boeing 737 for TUIfly Deutschland. Dedicated to precision, safety, and continuous growth.'    },
    {
      name: 'Andreas Marthaler',
      role: 'Pilot',
      image: '/assets/crew/AndreasMarthaler.jpg',
      description: 'Senior pilot with decades of experience. Former Airbus A321 captain at Austrian Airlines. At our company, he primarily flies the Big Girl (Jumper) aircraft with unmatched precision and calm authority.'    },
    {
      name: 'Eva Claire Marseille',
      role: 'Pilot',
      image: '/assets/crew/EvaClaireMarseille1.jpg',
      description: 'Dutch first officer flying the Boeing 747-8F for Cathay Pacific Cargo. Eva brings international experience and precision to our team, balancing her long-haul cargo missions with a passion for aviation and mentorship.'    },
    {
      name: 'Tobias Herbrechter',
      role: 'Tandem Instructor',
      image: '/assets/crew/TobiasHerbrechter.jpg',
      description: 'Originally from Schladming, Austria, Tobias is our go-to tandem instructor. Former mountain rescuer and full-time thrill-seeker, he brings unmatched calm and confidence to every jump — guests trust him with their first leap into the sky.'    },
    {
      name: 'Jacqueline Hamilton',
      role: 'Operations & Guest Relations',
      image: '/assets/crew/JacquelineHamilton.jpg',
      description: 'Jacqueline is the friendly face behind the scenes. As Eddy’s sister, she keeps everything running smoothly — from flight bookings to tour coordination. Guests love her warm communication and attention to detail.'    },
  ];
}
