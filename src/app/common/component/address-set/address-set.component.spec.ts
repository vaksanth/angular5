import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSetComponent } from './address-set.component';

describe('AddressSetComponent', () => {
  let component: AddressSetComponent;
  let fixture: ComponentFixture<AddressSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
