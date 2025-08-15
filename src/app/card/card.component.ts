import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 EZ KELL!

@Component({
  selector: 'app-card',
  standalone: true, // 👈 EZ FONTOS!
  imports: [CommonModule],  
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() link = '#';
  @Input() layout: 'left' | 'right' = 'left';
}
