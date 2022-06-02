import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCHangesComponent } from './on-changes.component';

describe('OnCHangesComponent', () => {
  let component: OnCHangesComponent;
  let fixture: ComponentFixture<OnCHangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnCHangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCHangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
