import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatanonplayerComponent } from './datanonplayer.component';

describe('DatanonplayerComponent', () => {
  let component: DatanonplayerComponent;
  let fixture: ComponentFixture<DatanonplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatanonplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatanonplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
