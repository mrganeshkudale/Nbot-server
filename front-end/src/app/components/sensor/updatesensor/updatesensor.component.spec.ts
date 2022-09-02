import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesensorComponent } from './updatesensor.component';

describe('UpdatesensorComponent', () => {
  let component: UpdatesensorComponent;
  let fixture: ComponentFixture<UpdatesensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
