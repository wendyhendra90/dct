import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataplayerComponent } from './dataplayer.component';

describe('DataplayerComponent', () => {
  let component: DataplayerComponent;
  let fixture: ComponentFixture<DataplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
