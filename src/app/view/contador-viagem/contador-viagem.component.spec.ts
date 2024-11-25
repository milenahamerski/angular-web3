import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorViagemComponent } from './contador-viagem.component';

describe('ContadorViagemComponent', () => {
  let component: ContadorViagemComponent;
  let fixture: ComponentFixture<ContadorViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorViagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
