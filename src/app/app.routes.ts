// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { FlightRoutesComponent } from './flight-routes/flight-routes.component';
import { CrewComponent } from './crew/crew.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'routes', component: FlightRoutesComponent }, // 👈 új útvonal
  {
  path: 'fleet',
  loadComponent: () => import('./fleet/fleet.component').then(m => m.FleetComponent)
  },
  {
    path: 'crew',
    loadComponent: () => import('./crew/crew.component').then(m => m.CrewComponent)
  }
];


