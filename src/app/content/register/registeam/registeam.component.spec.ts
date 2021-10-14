import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteamComponent } from './registeam.component';

describe('RegisteamComponent', () => {
  let component: RegisteamComponent;
  let fixture: ComponentFixture<RegisteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
