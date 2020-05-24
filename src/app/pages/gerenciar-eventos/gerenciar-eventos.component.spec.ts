import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarEventosComponent } from './gerenciar-eventos.component';

describe('GerenciarEventosComponent', () => {
  let component: GerenciarEventosComponent;
  let fixture: ComponentFixture<GerenciarEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
