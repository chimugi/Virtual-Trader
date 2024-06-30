import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTraderGraphComponent } from './virtual-trader-graph.component';

describe('VirtualTraderGraphComponent', () => {
  let component: VirtualTraderGraphComponent;
  let fixture: ComponentFixture<VirtualTraderGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualTraderGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualTraderGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
