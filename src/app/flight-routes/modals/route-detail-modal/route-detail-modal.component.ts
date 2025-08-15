import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-route-detail-modal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './route-detail-modal.component.html',
  styleUrls: ['./route-detail-modal.component.css']
})
export class RouteDetailModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<RouteDetailModalComponent>
  ) {}
  
  get isPremium(): boolean {
    return this.data.premium;
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}



