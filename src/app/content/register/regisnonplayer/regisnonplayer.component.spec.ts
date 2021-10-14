import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisnonplayerComponent } from './regisnonplayer.component';

describe('RegisnonplayerComponent', () => {
  let component: RegisnonplayerComponent;
  let fixture: ComponentFixture<RegisnonplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisnonplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisnonplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
