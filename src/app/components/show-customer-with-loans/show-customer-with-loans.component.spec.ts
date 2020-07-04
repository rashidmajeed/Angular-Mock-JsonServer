import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerWithLoansComponent } from './show-customer-with-loans.component';

describe('ShowCustomerWithLoansComponent', () => {
  let component: ShowCustomerWithLoansComponent;
  let fixture: ComponentFixture<ShowCustomerWithLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustomerWithLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerWithLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
