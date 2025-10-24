import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doing } from './doing';

describe('Doing', () => {
  let component: Doing;
  let fixture: ComponentFixture<Doing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
