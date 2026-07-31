import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutomoveisComponent } from './lista-automoveis.component';

describe('ListaAutomoveisComponent', () => {
  let component: ListaAutomoveisComponent;
  let fixture: ComponentFixture<ListaAutomoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAutomoveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAutomoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
