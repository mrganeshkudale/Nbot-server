import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsensorComponent } from './searchsensor.component';

describe('SearchsensorComponent', () => {
  let component: SearchsensorComponent;
  let fixture: ComponentFixture<SearchsensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchsensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
