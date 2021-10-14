import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DctacademyComponent } from './dctacademy.component';

describe('DctacademyComponent', () => {
  let component: DctacademyComponent;
  let fixture: ComponentFixture<DctacademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DctacademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DctacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
