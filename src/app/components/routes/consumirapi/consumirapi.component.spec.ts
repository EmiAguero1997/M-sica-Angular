import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirapiComponent } from './consumirapi.component';

describe('ConsumirapiComponent', () => {
  let component: ConsumirapiComponent;
  let fixture: ComponentFixture<ConsumirapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumirapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumirapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
