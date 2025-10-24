import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDoing } from './delete-doing';

describe('DeleteDoing', () => {
  let component: DeleteDoing;
  let fixture: ComponentFixture<DeleteDoing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDoing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDoing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
