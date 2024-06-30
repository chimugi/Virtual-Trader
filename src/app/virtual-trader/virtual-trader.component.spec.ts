import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTraderComponent } from './virtual-trader.component';

describe('VirtualTraderComponent', () => {
  let component: VirtualTraderComponent;
  let fixture: ComponentFixture<VirtualTraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualTraderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
