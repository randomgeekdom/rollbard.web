import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintablesComponent } from './printables.component';

describe('PrintablesComponent', () => {
  let component: PrintablesComponent;
  let fixture: ComponentFixture<PrintablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
