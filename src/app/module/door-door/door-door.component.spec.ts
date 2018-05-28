import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorDoorComponent } from './door-door.component';

describe('DoorDoorComponent', () => {
  let component: DoorDoorComponent;
  let fixture: ComponentFixture<DoorDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
