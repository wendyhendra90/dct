import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneregisComponent } from './doneregis.component';

describe('DoneregisComponent', () => {
  let component: DoneregisComponent;
  let fixture: ComponentFixture<DoneregisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneregisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
