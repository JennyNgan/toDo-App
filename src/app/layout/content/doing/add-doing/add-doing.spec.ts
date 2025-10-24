import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoing } from './add-doing';

describe('AddDoing', () => {
  let component: AddDoing;
  let fixture: ComponentFixture<AddDoing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDoing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDoing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
