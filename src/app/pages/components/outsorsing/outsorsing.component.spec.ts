import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsorsingComponent } from './outsorsing.component';

describe('OutsorsingComponent', () => {
  let component: OutsorsingComponent;
  let fixture: ComponentFixture<OutsorsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsorsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsorsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
