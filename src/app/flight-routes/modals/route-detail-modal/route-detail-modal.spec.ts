import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDetailModalComponent } from './route-detail-modal.component';

describe('RouteDetailModal', () => {
  let component: RouteDetailModalComponent;
  let fixture: ComponentFixture<RouteDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteDetailModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
