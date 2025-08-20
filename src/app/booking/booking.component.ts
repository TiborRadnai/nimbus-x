import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { PageTitleComponent } from '../page-title/page-title.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [HeroSectionComponent, PageTitleComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  routesList = [
    { id: 'porto-shuttle-to', name: 'Porto Santo Shuttle To', slug: 'porto-santo-shuttle-to', maxPassengers: 9, startHour: 8, endHour: 20 },
    { id: 'porto-shuttle-back', name: 'Porto Santo Shuttle Back', slug: 'porto-santo-shuttle-back', maxPassengers: 9, startHour: 8, endHour: 21 },
    { id: 'northern', name: 'Northern Cliffs & Coves', maxPassengers: 3, startHour: 8, endHour: 18 },
    { id: 'southern', name: 'Southern Shores Glide', maxPassengers: 3, startHour: 8, endHour: 18 },
    { id: 'funchal-night', name: 'Funchal by Night', maxPassengers: 3, startHour: 20, endHour: 23 },
    { id: 'desertas', name: 'Desertas Island Escape', maxPassengers: 3, startHour: 8, endHour: 18 },
    { id: 'porto-horizon', name: 'Porto Santo Horizon', maxPassengers: 3, startHour: 8, endHour: 18 },
    { id: 'golden-hour', name: 'Golden Hour over Madeira', maxPassengers: 3, startHour: 17, endHour: 20 },
    { id: 'skyfall', name: 'Skyfall Madeira — Parachute Experience', maxPassengers: 6, startHour: 9, endHour: 17 },
    { id: 'madeira-360', name: 'Madeira 360 Aerial Tour', maxPassengers: 3, startHour: 8, endHour: 19 },
  ];

  selectedRouteId: string = '';
  selectedRoute: (typeof this.routesList)[number] | null = null;
  passengerCount: number = 1;
  passengerOptions: number[] = [];
  availableTimeSlots: string[] = [];

  flightScheduleWithSeats: { from: string; to: string; departure: string; arrival: string; availableSeats: number }[] = [];

  constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const routeSlug = params['route'];
    if (routeSlug) {
      const matchedRoute = this.routesList.find(r =>
        r.slug === routeSlug || this.slugify(r.name) === routeSlug
      );

      if (matchedRoute) {
        this.selectedRouteId = matchedRoute.id;
        this.onRouteChange();

        setTimeout(() => {
          const el = document.getElementById('formTop');
          if (el) {
            const yOffset = -window.innerHeight / 4;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 300);
      }
    }
  });

    const fixedSchedule = [
      { from: 'Madeira', to: 'Porto Santo', departure: '08:00', arrival: '08:20' },
      { from: 'Porto Santo', to: 'Madeira', departure: '08:40', arrival: '09:00' },
      { from: 'Madeira', to: 'Porto Santo', departure: '10:00', arrival: '10:20' },
      { from: 'Porto Santo', to: 'Madeira', departure: '10:40', arrival: '11:00' },
      { from: 'Madeira', to: 'Porto Santo', departure: '12:00', arrival: '12:20' },
      { from: 'Porto Santo', to: 'Madeira', departure: '12:40', arrival: '13:00' },
      { from: 'Madeira', to: 'Porto Santo', departure: '14:00', arrival: '14:20' },
      { from: 'Porto Santo', to: 'Madeira', departure: '14:40', arrival: '15:00' },
      { from: 'Madeira', to: 'Porto Santo', departure: '16:00', arrival: '16:20' },
      { from: 'Porto Santo', to: 'Madeira', departure: '16:40', arrival: '17:00' },
      { from: 'Madeira', to: 'Porto Santo', departure: '18:00', arrival: '18:20' },
      { from: 'Porto Santo', to: 'Madeira', departure: '18:40', arrival: '19:00' },
      { from: 'Madeira', to: 'Porto Santo', departure: '20:00', arrival: '20:20' },
      { from: 'Porto Santo', to: 'Madeira', departure: '20:40', arrival: '21:00' }
    ];

    this.flightScheduleWithSeats = fixedSchedule.map(flight => ({
      ...flight,
      availableSeats: this.getAvailableSeats(flight.departure)
    }));
  }

  slugify(title: string): string {
    return title
      .toLowerCase()
      .replace(/[–—()]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  onRouteChange(): void {
    this.selectedRoute = this.routesList.find(r => r.id === this.selectedRouteId) || null;
    this.passengerOptions = this.generatePassengerOptions(this.selectedRoute?.maxPassengers || 1);
    this.passengerCount = 1;
    this.availableTimeSlots = this.getTimeSlotsForRoute(this.selectedRouteId);
  }

  getTimeSlotsForRoute(routeId: string): string[] {
    if (routeId === 'porto-shuttle-to') {
      return ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
    } else if (routeId === 'porto-shuttle-back') {
      return ['08:40', '10:40', '12:40', '14:40', '16:40', '18:40', '20:40'];
    } else {
      return this.generateTimeSlots(this.selectedRoute?.startHour || 8, this.selectedRoute?.endHour || 20);
    }
  }

  generateTimeSlots(start: number, end: number): string[] {
    const slots: string[] = [];
    for (let hour = start; hour <= end; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    return slots;
  }

  generatePassengerOptions(max: number): number[] {
    const options: number[] = [];
    for (let i = 1; i <= max; i++) {
      options.push(i);
    }
    return options;
  }

  getAvailableSeats(time: string): number {
    return Math.floor(Math.random() * (this.selectedRoute?.maxPassengers || 4));
  }
}
