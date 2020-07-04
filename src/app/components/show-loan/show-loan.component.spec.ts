import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanComponent } from './show-loan.component';

describe('ShowLoanComponent', () => {
  let component: ShowLoanComponent;
  let fixture: ComponentFixture<ShowLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
