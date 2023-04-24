import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahpesComponent } from './sahpes.component';

describe('SahpesComponent', () => {
  let component: SahpesComponent;
  let fixture: ComponentFixture<SahpesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahpesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
