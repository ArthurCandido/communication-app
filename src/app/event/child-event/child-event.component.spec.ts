import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEventComponent } from './child-event.component';

describe('ChildEventComponent', () => {
  let component: ChildEventComponent;
  let fixture: ComponentFixture<ChildEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
