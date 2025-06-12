import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compilado } from './compilado';

describe('Compilado', () => {
  let component: Compilado;
  let fixture: ComponentFixture<Compilado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compilado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compilado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
