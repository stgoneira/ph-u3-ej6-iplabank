import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SolicitudCuentaComponent } from './solicitud-cuenta.component';

describe('SolicitudCuentaComponent', () => {
  let component: SolicitudCuentaComponent;
  let fixture: ComponentFixture<SolicitudCuentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SolicitudCuentaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
