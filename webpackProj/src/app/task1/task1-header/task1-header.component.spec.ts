import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1HeaderComponent } from './task1-header.component';

describe('Task1HeaderComponent', () => {
  let component: Task1HeaderComponent;
  let fixture: ComponentFixture<Task1HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
