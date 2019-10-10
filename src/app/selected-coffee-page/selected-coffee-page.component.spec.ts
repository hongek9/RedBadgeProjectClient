import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCoffeePageComponent } from './selected-coffee-page.component';

describe('SelectedCoffeePageComponent', () => {
  let component: SelectedCoffeePageComponent;
  let fixture: ComponentFixture<SelectedCoffeePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCoffeePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCoffeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
