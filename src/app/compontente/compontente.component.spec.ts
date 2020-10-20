import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompontenteComponent } from './compontente.component';

describe('CompontenteComponent', () => {
  let component: CompontenteComponent;
  let fixture: ComponentFixture<CompontenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompontenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompontenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
