import { TestBed } from '@angular/core/testing';
import {Doing} from './doing';


describe('Doing', () => {
  let service: Doing;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doing);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
