import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateTodo } from './add-update-todo';

describe('AddUpdateTodo', () => {
  let component: AddUpdateTodo;
  let fixture: ComponentFixture<AddUpdateTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
