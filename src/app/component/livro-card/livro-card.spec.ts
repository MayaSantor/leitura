import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCard } from './livro-card';

describe('LivroCard', () => {
  let component: LivroCard;
  let fixture: ComponentFixture<LivroCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
