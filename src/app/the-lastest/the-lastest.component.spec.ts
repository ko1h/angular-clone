import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLastestComponent } from './the-lastest.component';

describe('TheLastestComponent', () => {
  let component: TheLastestComponent;
  let fixture: ComponentFixture<TheLastestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheLastestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
