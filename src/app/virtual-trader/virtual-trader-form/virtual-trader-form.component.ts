import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StockTicker } from '../contract';

@Component({
	selector: 'app-virtual-trader-form',
	standalone: true,
	providers: [provideNativeDateAdapter()],
	imports: [
		MatInputModule,
		MatFormFieldModule,
		MatDatepickerModule,
		FormsModule,
	],
	templateUrl: './virtual-trader-form.component.html',
	styleUrl: './virtual-trader-form.component.scss',
})
export class VirtualTraderFormComponent {
	public code = model<StockTicker['code']>('');
	public startDate = model<StockTicker['startDate']>();
	public endDate = model<StockTicker['endDate']>();
}
