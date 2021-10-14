import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderfulindonesiaComponent } from './wonderfulindonesia.component';

describe('WonderfulindonesiaComponent', () => {
  let component: WonderfulindonesiaComponent;
  let fixture: ComponentFixture<WonderfulindonesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonderfulindonesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderfulindonesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
