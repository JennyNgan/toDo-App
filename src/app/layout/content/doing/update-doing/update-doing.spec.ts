import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoing } from './update-doing';

describe('UpdateDoing', () => {
  let component: UpdateDoing;
  let fixture: ComponentFixture<UpdateDoing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDoing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDoing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
