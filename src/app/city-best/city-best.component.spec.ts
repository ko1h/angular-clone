import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBestComponent } from './city-best.component';

describe('CityBestComponent', () => {
  let component: CityBestComponent;
  let fixture: ComponentFixture<CityBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
