import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLicenseComponent } from './search-license.component';

describe('SearchLicenseComponent', () => {
  let component: SearchLicenseComponent;
  let fixture: ComponentFixture<SearchLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
