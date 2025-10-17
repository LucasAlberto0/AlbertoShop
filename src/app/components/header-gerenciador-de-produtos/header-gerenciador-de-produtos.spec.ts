import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGerenciadorDeProdutos } from './header-gerenciador-de-produtos';

describe('HeaderGerenciadorDeProdutos', () => {
  let component: HeaderGerenciadorDeProdutos;
  let fixture: ComponentFixture<HeaderGerenciadorDeProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGerenciadorDeProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGerenciadorDeProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
