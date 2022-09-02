import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesensorComponent } from './deletesensor.component';

describe('DeletesensorComponent', () => {
  let component: DeletesensorComponent;
  let fixture: ComponentFixture<DeletesensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletesensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
