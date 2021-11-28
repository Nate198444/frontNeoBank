import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftProfilComponent } from './left-profil.component';

describe('LeftProfilComponent', () => {
  let component: LeftProfilComponent;
  let fixture: ComponentFixture<LeftProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
