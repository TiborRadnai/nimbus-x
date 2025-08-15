import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouteDetailModalComponent } from '../modals/route-detail-modal/route-detail-modal.component';

@Component({
  selector: 'app-route-card',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './route-card.component.html',
  styleUrl: './route-card.component.css'
})
export class RouteCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() fullDescription!: string;
  @Input() imageUrl: string = '';
  @Input() duration: string = '';
  @Input() attractions: string = '';
  @Input() altitude: string = '';
  @Input() price: string = '';
  @Input() priceNote: string = '';
  @Input() reverse: boolean = false;
  @Input() premium: boolean = false;

  constructor(private dialog: MatDialog) {}

  openDetails(): void {
    this.dialog.open(RouteDetailModalComponent, {
      data: {
        title: this.title,
        fullDescription: this.fullDescription,
        imageUrl: this.imageUrl,
        duration: this.duration,
        attractions: this.attractions,
        altitude: this.altitude,
        price: this.price,
        premium: this.premium, // ← EZ FONTOS!
      },
      panelClass: this.premium ? ['custom-modal', 'premium'] : ['custom-modal'],
      disableClose: false
    });
  }
}



