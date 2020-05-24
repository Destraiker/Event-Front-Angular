import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEnderecosComponent } from './cadastrar-enderecos.component';

describe('CadastrarEnderecosComponent', () => {
  let component: CadastrarEnderecosComponent;
  let fixture: ComponentFixture<CadastrarEnderecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEnderecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
