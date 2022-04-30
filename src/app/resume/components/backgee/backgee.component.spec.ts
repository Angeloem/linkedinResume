import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgeeComponent } from './backgee.component';

describe('BackgeeComponent', () => {
  let component: BackgeeComponent;
  let fixture: ComponentFixture<BackgeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
