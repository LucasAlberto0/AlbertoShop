import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoDeProdutos } from './gerenciamento-de-produtos';

describe('GerenciamentoDeProdutos', () => {
  let component: GerenciamentoDeProdutos;
  let fixture: ComponentFixture<GerenciamentoDeProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoDeProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoDeProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
