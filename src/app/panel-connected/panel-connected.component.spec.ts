import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConnectedComponent } from './panel-connected.component';

describe('PanelConnectedComponent', () => {
  let component: PanelConnectedComponent;
  let fixture: ComponentFixture<PanelConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelConnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
