import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTraderTableComponent } from './virtual-trader-table.component';

describe('VirtualTraderTableComponent', () => {
	let component: VirtualTraderTableComponent;
	let fixture: ComponentFixture<VirtualTraderTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VirtualTraderTableComponent],
		})
			.compileComponents();

		fixture = TestBed.createComponent(VirtualTraderTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
