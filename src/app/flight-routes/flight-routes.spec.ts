import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightRoutes } from './flight-routes.component';

describe('FlightRoutes', () => {
  let component: FlightRoutes;
  let fixture: ComponentFixture<FlightRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
