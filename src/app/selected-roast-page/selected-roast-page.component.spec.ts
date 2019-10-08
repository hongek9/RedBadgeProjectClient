import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRoastPageComponent } from './selected-roast-page.component';

describe('SelectedRoastPageComponent', () => {
  let component: SelectedRoastPageComponent;
  let fixture: ComponentFixture<SelectedRoastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedRoastPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRoastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
