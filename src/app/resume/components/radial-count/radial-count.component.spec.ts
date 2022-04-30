import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialCountComponent } from './radial-count.component';

describe('RadialCountComponent', () => {
  let component: RadialCountComponent;
  let fixture: ComponentFixture<RadialCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
