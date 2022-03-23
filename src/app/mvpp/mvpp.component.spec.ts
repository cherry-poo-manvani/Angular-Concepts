import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvppComponent } from './mvpp.component';

describe('MvppComponent', () => {
  let component: MvppComponent;
  let fixture: ComponentFixture<MvppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
