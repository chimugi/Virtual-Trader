import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StockTicker } from '../contract';

@Component({
	selector: 'app-virtual-trader-form',
	standalone: true,
	imports: [MatInputModule, MatFormFieldModule, FormsModule],
	templateUrl: './virtual-trader-form.component.html',
	styleUrl: './virtual-trader-form.component.scss',
})
export class VirtualTraderFormComponent {
	public code = model<StockTicker['code']>('');
}
