import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorItemComponent } from './major-item.component';

describe('MajorItemComponent', () => {
  let component: MajorItemComponent;
  let fixture: ComponentFixture<MajorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
