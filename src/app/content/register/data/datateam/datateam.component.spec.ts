import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatateamComponent } from './datateam.component';

describe('DatateamComponent', () => {
  let component: DatateamComponent;
  let fixture: ComponentFixture<DatateamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatateamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatateamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
