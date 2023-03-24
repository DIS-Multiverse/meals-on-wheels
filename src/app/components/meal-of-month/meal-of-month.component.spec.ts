import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealOfMonthComponent } from './meal-of-month.component';

describe('MealOfMonthComponent', () => {
  let component: MealOfMonthComponent;
  let fixture: ComponentFixture<MealOfMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealOfMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealOfMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
