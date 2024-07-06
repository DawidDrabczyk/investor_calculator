import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateDataComponent } from './calculate-data.component';

describe('CalculateDataComponent', () => {
  let component: CalculateDataComponent;
  let fixture: ComponentFixture<CalculateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
