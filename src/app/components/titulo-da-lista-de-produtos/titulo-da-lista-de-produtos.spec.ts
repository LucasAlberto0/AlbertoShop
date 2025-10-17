import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloDaListaDeProdutos } from './titulo-da-lista-de-produtos';

describe('TituloDaListaDeProdutos', () => {
  let component: TituloDaListaDeProdutos;
  let fixture: ComponentFixture<TituloDaListaDeProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloDaListaDeProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloDaListaDeProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
