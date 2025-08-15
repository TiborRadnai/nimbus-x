import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 EZ KELL!

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  @Input() backgroundImage: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
}


