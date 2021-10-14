import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisplayerComponent } from './regisplayer.component';

describe('RegisplayerComponent', () => {
  let component: RegisplayerComponent;
  let fixture: ComponentFixture<RegisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
