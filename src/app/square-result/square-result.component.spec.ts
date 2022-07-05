import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareResultComponent } from './square-result.component';

describe('SquareResultComponent', () => {
  let component: SquareResultComponent;
  let fixture: ComponentFixture<SquareResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
