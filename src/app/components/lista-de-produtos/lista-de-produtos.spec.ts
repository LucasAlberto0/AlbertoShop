import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeProdutos } from './lista-de-produtos';

describe('ListaDeProdutos', () => {
  let component: ListaDeProdutos;
  let fixture: ComponentFixture<ListaDeProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
