import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosEmAltaComponent } from './destinos-em-alta.component';

describe('DestinosEmAltaComponent', () => {
  let component: DestinosEmAltaComponent;
  let fixture: ComponentFixture<DestinosEmAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinosEmAltaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinosEmAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
