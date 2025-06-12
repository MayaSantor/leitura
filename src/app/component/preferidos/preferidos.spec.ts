import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preferidos } from './preferidos';

describe('Preferidos', () => {
  let component: Preferidos;
  let fixture: ComponentFixture<Preferidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preferidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preferidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
