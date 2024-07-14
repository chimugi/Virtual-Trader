import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StockTicker } from '../contract';

@Component({
	selector: 'app-virtual-trader-form',
	standalone: true,
	providers: [provideNativeDateAdapter()],
	imports: [
		MatButtonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		FormsModule,
	],
	templateUrl: './virtual-trader-form.component.html',
	styleUrl: './virtual-trader-form.component.scss',
})
export class VirtualTraderFormComponent {
	public code: StockTicker['code'] = '';
	public startDate = model<StockTicker['startDate']>();
	public endDate = model<StockTicker['endDate']>();

	public addCode = output<StockTicker['code']>();
}
