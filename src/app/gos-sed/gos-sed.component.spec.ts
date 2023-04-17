import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GosSedComponent } from './gos-sed.component';

describe('GosSedComponent', () => {
  let component: GosSedComponent;
  let fixture: ComponentFixture<GosSedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GosSedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GosSedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
