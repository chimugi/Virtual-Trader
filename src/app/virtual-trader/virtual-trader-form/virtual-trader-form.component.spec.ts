import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTraderFormComponent } from './virtual-trader-form.component';

describe('VirtualTraderFormComponent', () => {
	let component: VirtualTraderFormComponent;
	let fixture: ComponentFixture<VirtualTraderFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [VirtualTraderFormComponent],
		})
			.compileComponents();

		fixture = TestBed.createComponent(VirtualTraderFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
